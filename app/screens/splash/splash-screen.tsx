import React from "react"
import { observer } from "mobx-react-lite"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthenticatedNavigator } from "../../navigators/authenticated-navigator"
import { UnAuthenticatedNavigator } from "../../navigators/unauthenticated-nagivator"
import I18n from "i18n-js"

export type SplashScreenNavigatorParamList = {
  unAuthenticated: undefined
  authenticated: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<SplashScreenNavigatorParamList>()

export const SplashScreen = observer(function SplashScreen() {
  // Pull in one of our MST stores
  const { userStore } = useStores()

  const { user, language } = userStore

  I18n.locale = language || "fr"

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user.uid === "" ? (
        <Stack.Screen name="unAuthenticated" component={UnAuthenticatedNavigator} />
      ) : (
        <Stack.Screen name="authenticated" component={AuthenticatedNavigator} />
      )}
    </Stack.Navigator>
  )

  // return (
  //   <Screen style={ROOT} preset="scroll">
  //     <Text preset="header" text="" />
  //   </Screen>
  // )
})
