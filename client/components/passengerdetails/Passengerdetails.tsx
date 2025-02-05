import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { RadioButton, TextInput } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";

const Passengerdetails = ({
  type,
  count,
  index,
  onChange,
  errors,
}: {
  type: string;
  count: number;
  index: number;
  onChange: (index: number, data: any) => void;
  errors: any;
}) => {
  const [showDate, setShowDate] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [androidDate, setAndroidDate] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
  });
  const handleData = (
    event?: any,
    platform?: string,
    selectedDate?: Date
  ): void => {
    console.log("inside");
    if (platform == "ios") {
      console.log("hi");
      setShowDate(true);
      if (selectedDate) {
        setDate(selectedDate);
        handleChange("dob", selectedDate.toISOString().split("T")[0]);
      }
    } else {
      setAndroidDate(false);
      if (selectedDate) {
        setDate(selectedDate);
        handleChange("dob", selectedDate.toISOString().split("T")[0]);
      }
    }
  };
  const handleChange = (field: string, value: string) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    onChange(count - 1, { ...updatedData, type: type, count: count - 1 });
  };

  return (
    <View style={styles.passengerDetailsContainer}>
      <View>
        <Text style={styles.headerText}>
          Passenger {count}. {type}
        </Text>
      </View>
      <View>
        <View style={styles.radioBtnContainer}>
          <View style={styles.radioBtnInnerContainer}>
            <Text>Male</Text>
            <RadioButton
              value="male"
              status={formData.gender == "male" ? "checked" : "unchecked"}
              onPress={() => {
                handleChange("gender", "male");
              }}
            />
          </View>
          <View style={styles.radioBtnInnerContainer}>
            <Text>Female</Text>
            <RadioButton
              value="female"
              status={formData.gender == "female" ? "checked" : "unchecked"}
              onPress={() => {
                handleChange("gender", "female");
              }}
            />
          </View>
        </View>
        {errors?.gender && (
          <Text style={{ color: "red" }}>please fill the gender</Text>
        )}
      </View>

      <View style={styles.textInputContainer}>
        <TextInput
          underlineColor="transparent"
          activeUnderlineColor="gray"
          placeholderTextColor={"gray"}
          style={styles.inputFields}
          placeholder="First name"
          value={formData.firstName}
          error={errors?.firstName}
          onChangeText={(text) => {
            handleChange("firstName", text);
          }}
        />
        {errors?.firstName && (
          <Text style={{ color: "red" }}>{errors?.firstName} </Text>
        )}
        <TextInput
          underlineColor="transparent"
          activeUnderlineColor="gray"
          placeholderTextColor={"gray"}
          style={styles.inputFields}
          placeholder="Last Name"
          value={formData.lastName}
          error={errors?.lastName}
          onChangeText={(text) => {
            handleChange("lastName", text);
          }}
        />
        {errors?.lastName && (
          <Text style={{ color: "red" }}>{errors?.lastName} </Text>
        )}

        <TouchableOpacity style={styles.dateContainer}>
          {showDate ? (
            <Text style={styles.dobText}>{date.toLocaleDateString()}</Text>
          ) : (
            <Text style={styles.dobPlaceholder}>dd/mm/yyy</Text>
          )}
          <View style={styles.date_icon_container}>
            <Ionicons
              onPress={() => {
                setShowDate((prev) => !prev);
                setAndroidDate(true);
              }}
              style={styles.dateIcon}
              color={"gray"}
              size={25}
              name="calendar"
            />
            {Platform.OS == "android" ? (
              showDate &&
              androidDate && (
                <DateTimePicker
                  style={styles.datePicker}
                  value={date}
                  mode="date"
                  display="compact"
                  onChange={(event: any, selectedDate?: Date) => {
                    handleData(event, "android", selectedDate);
                  }}
                />
              )
            ) : (
              <DateTimePicker
                style={styles.datePicker}
                value={date}
                mode="date"
                display="compact"
                onChange={(event: any, selectedDate?: Date) => {
                  handleData(event, "ios", selectedDate);
                }}
              />
            )}
          </View>
        </TouchableOpacity>
        {errors?.dob && (
          <Text style={{ color: "red" }}>please fill the dob</Text>
        )}
      </View>
    </View>
  );
};

export default Passengerdetails;

// });
const styles = StyleSheet.create({
  passengerDetailsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 2,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  radioBtnContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  radioBtnInnerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  textInputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  inputFields: {
    padding: 0,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    backgroundColor: "transparent",
    borderColor: "gray",
    outline: "none",
    fontSize: 15,
  },
  dateContainer: {
    borderColor: "gray",
    width: "100%",
    padding: 8,
    color: "gray",
    borderBottomWidth: 0.5,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dobPlaceholder: {
    color: "gray",
  },
  dobText: {
    color: "black",
  },
  datePicker: {
    padding: 0,
    marginBottom: 150,
    position: "absolute",
    left: -30,
    top: -10,
    borderWidth: 1,
    zIndex: 99,
    opacity: 0.012,
  },
  date_icon_container: {
    position: "relative",
    height: 30,
    width: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "center",
  },
  dateIcon: {
    position: "absolute",
    zIndex: 9,
    cursor: "pointer",
  },
});
