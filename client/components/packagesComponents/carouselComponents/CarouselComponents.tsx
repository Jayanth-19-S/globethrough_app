import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { packagesCarouselDataType, packagesDataType } from "@/types";
import { LinearGradient } from "expo-linear-gradient";

const CarouselComponents = ({
  linkTo,
  offer,
  desc,
  bgImg,
}: packagesCarouselDataType) => {
  return (
    <TouchableOpacity
      onPress={() => {
        alert("hi");
      }}
    >
      <ImageBackground
        resizeMode="cover"
        source={{ uri: bgImg }}
        style={styles.container}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.bgGradient}
        >
          <View style={styles.content}>
            <Text style={styles.offer}>Up to {offer} off</Text>
            <Text style={styles.desc}>{desc}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CarouselComponents;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    overflow: "hidden",
    height: "100%",
    borderRadius: 10,
  },
  bgGradient: {
    borderRadius: 10,
    padding: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 30,
  },
  content: {
    flexDirection: "column",
    gap: 8,
  },

  offer: {
    backgroundColor: "#01493E",
    padding: 8,
    borderRadius: 5,
    color: "#fff",
    width: 140,
  },
  desc: {
    fontSize: 13,
    fontWeight: "400",
    color: "#fff",
  },
});
