import React from "react"
import { observer } from "mobx-react-lite"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useStores } from "../models"
import {
  ForgotPasswordScreen,
  LaunchScreen,
  RegisterScreen,
  LoginScreen,
  VerificationScreen,
} from "../screens"

export type UnAuthenticatedNavigatorParamList = {
  launch: undefined
  login: undefined
  register: undefined
  forgotPassword: undefined
  verification: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<UnAuthenticatedNavigatorParamList>()

export const UnAuthenticatedNavigator = observer(function AuthenticatedNavigator() {
  // Pull in one of our MST stores
  const { userStore } = useStores()

  const { user } = userStore

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      {user.isFirstTime ? <Stack.Screen name="launch" component={LaunchScreen} /> : null}
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="verification" component={VerificationScreen} />
    </Stack.Navigator>
  )
})
