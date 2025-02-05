import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

const FakeScratchCard = ({ img, id }: { img: any; id?: string }) => {
  return (
    <View style={styles.fakeScratchCard}>
      <Image style={styles.img} source={img} />
    </View>
  );
};

export default FakeScratchCard;

const styles = StyleSheet.create({
  fakeScratchCard: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  img: {
    height: '100%',
    width: '100%',
  },
});
