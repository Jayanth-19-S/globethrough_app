import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ScratchCards from "./ScratchCards";
import { useImage } from "@shopify/react-native-skia";

const AnimationScratchCard = () => {
  const image = useImage(require("@/assets/images/scratchCard.png"));
  if (!image) {
    return <Text>Loading....</Text>;
  }
  return (
    <ScratchCards image={image} style={styles.scratchCard}>
      <View style={styles.card}>
        <Image
          source={require("@/assets/images/food.png")}
          style={styles.imageCard}
        />
        <Text style={styles.text}>Cashback</Text>
        <Text style={styles.subTitleText}>$10</Text>
      </View>
    </ScratchCards>
  );
};

export default AnimationScratchCard;
const styles = StyleSheet.create({
  scratchCard: {
    borderRadius: 16,
    height: 200,
    width: 200,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderColor: "gray",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  imageCard: {
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {},
  subTitleText: {
    fontSize: 20,
    color: "black",
    fontWeight: 700,
  },
});
