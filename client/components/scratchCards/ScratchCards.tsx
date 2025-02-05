import React, { useRef, useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Animated } from 'react-native';
import {
  Canvas,
  Group,
  Mask,
  Path,
  Rect,
  SkImage,
  Image,
  Skia,
} from '@shopify/react-native-skia';

type Props = {
  style?: StyleProp<ViewStyle>;
  image: SkImage | null;
  children: React.ReactNode;
};

const ScratchCards: React.FC<Props> = ({ style, children, image }) => {
  const [[width, height], setSize] = useState([0, 0]);
  const path = useRef(Skia.Path.Make());
  const [scratchedArea, setScratchedArea] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Function to calculate scratched area
  const calculateScratchedArea = () => {
    const bounds = path.current.getBounds();
    const totalArea = width * height;
    const scratchedArea = bounds.width * bounds.height;
    return (scratchedArea / totalArea) * 100;
  };

  const handleTouchMove = ({
    locationX,
    locationY,
  }: {
    locationX: number;
    locationY: number;
  }) => {
    path.current.lineTo(locationX, locationY);

    // Update scratched area percentage
    const area = calculateScratchedArea();
    setScratchedArea(area);

    // Trigger reveal if more than 50% scratched
    if (!revealed && area > 50) {
      setRevealed(true);

      // Fade in animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View
      onLayout={(e) => {
        const { width: layoutWidth, height: layoutHeight } =
          e.nativeEvent.layout;
        setSize([layoutWidth, layoutHeight]);
      }}
      style={[styles.container, style]}
    >
      {Boolean(image && width && height) && (
        <>
          <Animated.View
            style={[
              styles.childrenContainer,
              { opacity: fadeAnim, zIndex: revealed ? 1 : -1 },
            ]}
          >
            {children}
          </Animated.View>
          <Canvas
            style={styles.canvas}
            onTouchStart={({ nativeEvent }) => {
              path.current.moveTo(nativeEvent.locationX, nativeEvent.locationY);
            }}
            onTouchMove={({ nativeEvent }) => {
              handleTouchMove(nativeEvent);
            }}
          >
            <Mask
              mode="luminance"
              mask={
                <Group>
                  <Rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    color="white"
                  />
                  <Path
                    path={path.current}
                    color="black"
                    style="stroke"
                    strokeJoin="round"
                    strokeCap="round"
                    strokeWidth={50}
                  />
                </Group>
              }
            >
              <Image
                image={image}
                fit="cover"
                x={0}
                y={0}
                width={width}
                height={height}
              />
            </Mask>
          </Canvas>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 150,
    height: 150,
    overflow: 'hidden',
    borderRadius: 16,
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  childrenContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default ScratchCards;
