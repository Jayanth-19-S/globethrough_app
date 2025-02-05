import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { carouselPackagesData, packagesData } from "@/utilities";

import MainPackageComponent from "@/components/packagesComponents/mainPackageComponent/MainPackageComponent";
import Carousel from "react-native-reanimated-carousel";
import CarouselComponents from "@/components/packagesComponents/carouselComponents/CarouselComponents";
const width = Dimensions.get("window").width;

const packages = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.packagess}>
        <View style={styles.top}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Packages</Text>
            <Text style={styles.headerSubtext}>Select your packages</Text>
          </View>

          <Carousel
            style={{
              flex: 1,
            }}
            width={width}
            loop
            autoPlay={true}
            data={carouselPackagesData}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => {}}
            renderItem={({ item }) => (
              <CarouselComponents
                offer={item.offer}
                linkTo={item.linkTo}
                desc={item.desc}
                bgImg={item.bgImg}
              />
            )}
          />
        </View>
        <View style={styles.bottom}>
          {packagesData.map((item, ind) => (
            <MainPackageComponent
              key={ind}
              price={item.price}
              bgImg={item.bgImg}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default packages;

const styles = StyleSheet.create({
  packagess: {
    flex: 1,
    gap: 20,
    flexDirection: "column",
  },
  top: {
    height: 250,
  },
  header: {
    padding: 10,
  },
  headerText: {
    fontWeight: "600",
    fontSize: 16,
  },
  headerSubtext: {
    fontSize: 14,
    color: "gray",
    fontWeight: "600",
  },
  packagesListContent: {
    flexDirection: "column",
    gap: 20,
    borderColor: "green",
    padding: 10,
  },
  carouselContainer: {
    borderWidth: 2,
    borderColor: "red",
  },
  bottom: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
    gap: 20,
  },
});
