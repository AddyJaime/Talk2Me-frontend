import { useEffect } from "react";
import { Animated, Easing } from "react-native";

import { useRef } from "react";

const useAnimation = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startLoopAnimation = () => {
      Animated.loop(
        Animated.timing(translateX, {
          toValue: -100,
          duration: 8000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    };
    startLoopAnimation();
  }, [])

  return translateX
}

export default useAnimation