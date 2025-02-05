import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { recentFlightsData } from "@/utilities";
import RecentFlights from "@/components/recentflights/RecentFlights";
import { MaterialIcons } from "@expo/vector-icons";

const booking = () => {
  return (
    <ScrollView style={styles.main_container}>
      <View style={styles.booking}>
        <View style={styles.booking_top}>
          <Text style={styles.header_text}>Active Flights</Text>
          <View style={styles.active_flights}>
            <View style={styles.active_flights_top}>
              <View style={styles.flight_info}>
                <Image
                  style={styles.flight_img}
                  source={require("@/assets/images/indigo.png")}
                />
                <Text style={styles.flight_number}>65-Tr</Text>
              </View>
              <TouchableOpacity style={styles.change_date}>
                <Text style={styles.change_datetext}>Change Date</Text>
                <MaterialIcons
                  name="edit"
                  style={{ fontSize: 15, color: "#fff" }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.active_flights_bottom}>
              <View>
                <Text style={styles.detail_text}>
                  19:40 <Text style={styles.local_time}>(9:40 AM)</Text>
                </Text>
                <Text style={styles.fromToText}>BLR,Bengaluru</Text>
              </View>
              <View>
                <Text style={styles.detail_text}>4h 10m</Text>
                <Text style={styles.detail_text}>1 Stop</Text>
              </View>
              <View>
                <Text style={styles.detail_text}>
                  12:40 <Text style={styles.local_time}>(12:40 AM)</Text>
                </Text>
                <Text style={styles.fromToText}>IXE, Mangaluru</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.booking_bottom}>
          <Text style={styles.header_text}>Recent Flights</Text>
          <View style={styles.recentFlightsContainer}>
            {recentFlightsData.map((item, ind) => (
              <RecentFlights
                flightClass={item.flightClass}
                flightImg={item.flightImg}
                flightNumber={item.flightNumber}
                from={item.from}
                to={item.to}
                departDate={item.departDate}
                numberOfTraveller={item.numberOfTraveller}
                key={ind}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main_container: {
    borderWidth: 2,
    borderColor: "green",
    flexDirection: "column",
  },

  booking: {
    backgroundColor: "#f2f2f2",
    flexDirection: "column",
    gap: 40,
    padding: 12,
    height: "100%",
  },

  booking_top: {
    flexDirection: "column",
    gap: 10,
  },
  header_text: {
    fontWeight: 600,
    fontSize: 15,
  },
  active_flights: {
    borderRadius: 6,
    flexDirection: "column",
    backgroundColor: "#fff",
    shadowColor: "#000",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "#f2f2f2",
      },
      android: {
        elevation: 10,
      },
    }),
  },
  active_flights_top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flight_info: {
    flexDirection: "column",
    marginHorizontal: 20,
    marginVertical: 10,
    gap: 3,
  },
  flight_number: {
    color: "#606060",
    fontSize: 13,
    fontWeight: "500",
  },
  flight_img: {
    height: 20,
    width: 70,
    objectFit: "contain",
  },

  change_date: {
    alignSelf: "flex-start",
    backgroundColor: "#01493E",
    padding: 5,
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  change_datetext: {
    color: "#fff",
    fontSize: 12,
  },
  active_flights_bottom: {
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detail_text: {
    fontSize: 13,
    fontWeight: 400,
  },
  local_time: {
    color: "#606060",
  },
  fromToText: {
    fontWeight: "500",
    marginVertical: 5,
  },
  booking_bottom: {
    flexDirection: "column",
    gap: 10,
  },

  recentFlightsContainer: {
    flexDirection: "column",
    gap: 12,
  },
});
export default booking;
