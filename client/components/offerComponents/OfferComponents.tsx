import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

const OfferComponents = ({
  code,
  offer,
  desc,
}: {
  code: string;
  offer: number;
  desc: string;
}) => {
  return (
    <View style={styles.offerComponentContainer}>
      <View style={styles.offerCompoHeader}>
        <View style={styles.offerInnerHeader}>
          <TouchableOpacity
            onPress={() => {
              Clipboard.setStringAsync(code);
            }}
          >
            <MaterialCommunityIcons
              name="content-copy"
              size={20}
              color="white"
            />
          </TouchableOpacity>
          <Text style={styles.code}>{code}</Text>
        </View>
      </View>
      <ImageBackground
        style={styles.imageBg}
        resizeMode="contain"
        source={require("@/assets/images/offerBg.png")}
      >
        <View style={styles.content}>
          <Text style={styles.offerText}>Up to {offer} off </Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OfferComponents;

const styles = StyleSheet.create({
  offerComponentContainer: {
    flexDirection: "column",
    borderRadius: 10,
    flexBasis: "48.5%",
    aspectRatio: 1,
    gap: 10,
    overflow: "hidden",
    backgroundColor: "#C4C4C4",
    alignSelf: "flex-start",
  },
  offerCompoHeader: {
    justifyContent: "flex-start",
  },
  offerInnerHeader: {
    width: "80%",
    borderWidth: 0,
    borderRightWidth: 1,
    borderColor: "#C4C4C4",
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#01493E",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderStyle: "dashed",
  },
  imageBg: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  content: {
    flexDirection: "column",
    padding: 12,
    width: "100%",
    paddingTop: 0,
  },
  code: {
    textTransform: "uppercase",
    fontSize: 17,
    color: "white",
  },

  offerText: {
    fontWeight: "500",
    fontSize: 18,
  },
  desc: {
    color: "gray",
  },
});
