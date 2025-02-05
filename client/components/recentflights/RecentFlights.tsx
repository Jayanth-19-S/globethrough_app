import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { RecentFlightType } from "@/types";
const { width, height } = Dimensions.get("window");
const RecentFlights = ({
  numberOfTraveller,
  flightClass,
  flightImg,
  flightNumber,
  from,
  to,
  departDate,
}: RecentFlightType) => {
  // const departureDateObj = flightSearchInfo?.departDate
  //   ? new Date(flightSearchInfo?.departDate)
  //   : null;
  // const formattedDepartureDate = departureDateObj
  //   ? departureDateObj.toLocaleDateString("en-US", {
  //       month: "long",
  //       day: "numeric",
  //     })
  //   : "N/A";
  return (
    <View style={styles.recentFlights}>
      <View style={styles.left}>
        <View style={styles.flight_details}>
          <Image style={styles.img} source={flightImg} />
          <Text style={styles.detail}>{flightNumber}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.headerCenter}>
          <>
            <View style={styles.cityText}>
              <Text style={styles.headerFlightText}>{from}</Text>
              <Text style={styles.arrow}>→</Text>

              <Text style={styles.headerFlightText}>{to}</Text>
            </View>

            {/* Details section below city and IATA, aligned horizontally */}
            <View style={styles.detailsContainer}>
              <Text style={styles.detail}>{departDate}.</Text>
              <Text style={styles.detail}>{numberOfTraveller} Travelers .</Text>
              <Text style={styles.detail}>{flightClass}</Text>
            </View>
          </>
        </View>
      </View>
    </View>
  );
};

export default RecentFlights;

const styles = StyleSheet.create({
  recentFlights: {
    padding: 15,
    flexDirection: "row",
    gap: 30,
    width: "100%",
    backgroundColor: "#fff",
    borderRightWidth: 8,
    borderColor: "#01493E",
  },
  left: {},
  flight_details: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  img: {
    height: 30,
    objectFit: "contain",
  },
  right: {
    flexDirection: "column",
    flex: 1,
  },

  headerCenter: {
    flex: 1,
    flexDirection: "column",
    gap: 3,
  },
  cityText: {
    alignItems: "center",
    flexDirection: "row",
  },
  arrow: {
    color: "black",
    fontWeight: "500",
    marginHorizontal: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    flexWrap: "wrap",
  },
  detail: {
    opacity: 0.7,
    color: "black",
    fontSize: width * 0.03,
    fontWeight: "500",
  },
  headerFlightText: {
    fontSize: 15,
    fontWeight: "700",
  },
});
