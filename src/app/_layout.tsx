import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'

import {
  useFonts,
  Roboto_400Regular as Roboto400,
  Roboto_500Medium as Roboto500,
  Roboto_700Bold as Roboto700,
} from '@expo-google-fonts/roboto'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto400,
    Roboto500,
    Roboto700,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="default" />
      {fontsLoaded && <Slot />}
    </GestureHandlerRootView>
  )
}
