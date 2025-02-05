import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';

const PackageLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="packages"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
export default PackageLayout;
