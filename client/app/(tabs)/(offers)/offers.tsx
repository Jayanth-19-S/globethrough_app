import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Share,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import OfferComponents from "@/components/offerComponents/OfferComponents";
import { offerData, referralData } from "@/utilities";
import AnimationScratchCard from "@/components/scratchCards/AnimationScratchCard";
import FakeScratchCard from "@/components/fakeScratchCard/FakeScratchCard";

const screenWidth = Dimensions.get("window").width;
console.log(screenWidth);

const offers = () => {
  const [active, setActive] = useState<string>("");
  const referFriend = async () => {
    const referralMessage = `Join Globethrough and use my referral code ERT9 to get exciting offers! Visit: https://globethrough.com`;

    try {
      await Share.share({
        message: referralMessage,
        title: "Refer a Friend",
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  const handleReveal = () => {
    console.log("Congratulations! You revealed the prize!");
  };
  console.log(active);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View style={styles.offerContainer}>
        <View style={styles.top}>
          <View>
            <Text style={styles.heading}>Referred Rewards</Text>
          </View>

          {!active && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
            >
              {referralData.map((item, ind) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.scratchCardItem}
                  onPress={() => {
                    setActive(item.id);
                  }}
                >
                  <FakeScratchCard img={item.img} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
          {active && (
            <View style={styles.activeScrollContainer}>
              {referralData.map((item, ind) => {
                if (item.id === active) {
                  return (
                    <View key={ind} style={styles.scratchActiveCard}>
                      <TouchableOpacity
                        onPress={() => {
                          setActive("");
                        }}
                      >
                        <Text
                          style={{
                            padding: 10,
                            fontSize: 18,
                            fontWeight: 600,
                            textAlign: "right",
                          }}
                        >
                          X
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          flex: 1,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AnimationScratchCard />
                      </View>
                    </View>
                  );
                }
              })}
            </View>
          )}
          <TouchableOpacity style={styles.moreItems}>
            {/* <Text style={{ color: "gray", paddingBottom: 2 }}>
              All Referrals
            </Text> */}

            {/* <AntDesign name="right" size={15} color="gray" /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.referContainer}>
          <View style={styles.referInnerContainer}>
            <Text style={styles.heading}>Refer Globethrough</Text>
            <Text style={styles.desc}>
              Refer globethrough to friends to get 150
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={referFriend}>
              <MaterialCommunityIcons name="share" size={40} color="#01493E" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.specialOffer}>
          <View>
            <Text style={styles.heading}>Special Offers</Text>
            <Text style={styles.desc}>
              Get up to 25% off on your next flight booking.
            </Text>
          </View>
          <View style={styles.offerListContainer}>
            <View style={styles.offers}>
              {offerData.map((item, ind) => (
                <OfferComponents
                  key={ind}
                  code={item.code}
                  offer={item.offer}
                  desc={item.desc}
                />
              ))}
            </View>

            <TouchableOpacity style={styles.moreItems}>
              {/* <Text style={{ color: "gray", paddingBottom: 2 }}>
                More Rewards
              </Text> */}
              {/* <AntDesign name="right" size={15} color="gray" /> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default offers;

const styles = StyleSheet.create({
  offerContainer: {
    flexDirection: "column",
    gap: 30,
    padding: 10,
    flex: 1,
  },
  top: {
    flexDirection: "column",
    gap: 10,
  },

  scrollContainer: {
    padding: 10,
    position: "relative",
    flexDirection: "row",
    gap: 10,
  },
  scratchCardItem: {
    height: 150,
    width: 150,
  },
  activeScrollContainer: {
    height: "90%",
    width: "100%",
    backgroundColor: "#01493E",
  },
  scratchActiveCard: {
    padding: 10,
    position: "absolute",

    backgroundColor: "#fff",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,

    flexDirection: "column",
  },
  referContainer: {
    paddingHorizontal: 5,
    flexDirection: "row",
    gap: 10,
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "gray",
  },
  scratchMainCard: {
    shadowColor: "#000",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 0 },

        backgroundColor: "#f2f2f2",
      },
      android: {
        elevation: 5,
      },
    }),
    height: 500,
    width: 330,
    backgroundColor: "white",
    zIndex: 9,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: -5,
    right: 0,
    bottom: 0,
    top: -5,
  },
  moreItems: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 30,
  },

  referInnerContainer: {
    flexDirection: "column",
  },
  heading: {
    fontSize: 17,
    fontWeight: "600",
  },
  desc: {
    color: "gray",
    fontWeight: 500,
  },
  specialOffer: {
    flex: 1,
    gap: 25,
    height: "100%",
  },
  offerListContainer: {
    flexDirection: "column",
    flex: 1,
    gap: 5,
  },
  offers: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});
