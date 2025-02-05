import { Stack } from 'expo-router';
import React from 'react';

const OfferLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="offers" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OfferLayout;
