import { Slot, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
};
export default RootLayout;
