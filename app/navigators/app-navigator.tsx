/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WelcomeScreen, DemoScreen, DemoListScreen, ForgotPasswordScreen } from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { LoginScreen } from "../screens/login/login-screen"
import { RegisterScreen } from "../screens/register/register-screen"
import { PersonalizationScreen } from "../screens/personalization/personalization-screen"
import { LaunchScreen } from "../screens/launch/launch-screen"
import { HomeScreen } from "../screens/home/home-screen"
import { EventsScreen } from "../screens/events/events-screen"

import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged, User } from "firebase/auth"
// import { getAuth, onAuthStateChanged, User } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDsp7jDAG_Pp2wulplj1Ci3Nlswrd6aNN8",
  authDomain: "casataqafa-d235c.firebaseapp.com",
  projectId: "casataqafa-d235c",
  storageBucket: "casataqafa-d235c.appspot.com",
  messagingSenderId: "989341446856",
  appId: "1:989341446856:web:f531cca289ed0625b7ebfd",
  measurementId: "G-BVXGGBN5BG",
}

// Initialize Firebase
initializeApp(firebaseConfig)

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  welcome: undefined
  demo: undefined
  demoList: undefined
  login: undefined
  register: undefined
  forgotPassword: undefined
  personalization: undefined
  home: undefined
  launch: undefined
  events: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="launch"
    >
      <Stack.Screen name="launch" component={LaunchScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="personalization" component={PersonalizationScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="events" component={EventsScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
      <Stack.Screen name="demoList" component={DemoListScreen} />
    </Stack.Navigator>
  )
}

const AppStack2 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="events"
    >
      <Stack.Screen name="events" component={EventsScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
      <Stack.Screen name="demoList" component={DemoListScreen} />
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const [user, setUser] = React.useState<User>()

  // React.useEffect(() => {
  //   const auth = getAuth()
  //   const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
  //     console.tron.log(user)
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       // console.tron.log("hj", user)
  //       setUser(user)
  //       // ...
  //     } else {
  //       setUser(undefined)
  //       // User is signed out
  //       // ...
  //     }
  //   })
  //   return unsubscribeFromAuthStatuChanged
  // }, [])

  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
