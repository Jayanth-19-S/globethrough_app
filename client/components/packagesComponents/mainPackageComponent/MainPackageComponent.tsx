import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { packagesDataType } from "@/types";
import { LinearGradient } from "expo-linear-gradient";

const MainPackageComponent = ({
  title,
  price,
  desc,
  bgImg,
}: packagesDataType) => {
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
            <Text style={styles.title}>
              Best Of <Text style={styles.mainTitle}>{title}</Text>
            </Text>
            <Text style={styles.price}>{`Rs ${price}/-`}</Text>
            <Text style={styles.desc}>{desc}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MainPackageComponent;
const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    height: 250,
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
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
  mainTitle: {
    fontWeight: 700,
    fontSize: 23,
    color: "#fff",
  },
  price: {
    backgroundColor: "#01493E",
    padding: 8,
    borderRadius: 5,
    color: "#fff",
    width: 100,
  },
  desc: {
    fontSize: 13,
    fontWeight: "400",
    color: "#fff",
  },
});
