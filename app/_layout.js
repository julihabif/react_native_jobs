
import React, {useCallback} from "react";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {Stack} from "expo-router";

SplashScreen.preventAutoHideAsync()
const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  if (!fontsLoaded) {
    return null
  }
  return(<Stack onLayout={onLayoutRootView()}/>)
}
export default Layout;

