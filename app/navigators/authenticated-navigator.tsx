import React from "react"
import { observer } from "mobx-react-lite"
// import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useStores } from "../models"
import { BottomNavigationBar } from "./bottom-navigator"
import { PersonalizationScreen } from "../screens"
import { MapFullscreenModal } from "../components"

export type AuthenticatedNavigatorParamList = {
  personalization: undefined
  home: undefined
  events: undefined
  event: undefined
  place: undefined
  eventProgram: undefined
  artist: undefined
  favorite: undefined
  profile: undefined
  bottomTab: undefined
  mapfullscreenModal: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AuthenticatedNavigatorParamList>()

export const AuthenticatedNavigator = observer(function AuthenticatedNavigator() {
  // Pull in one of our MST stores
  const { userStore } = useStores()

  const { user } = userStore

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Group>
        {!user.hasInterests ? (
          <Stack.Screen name="personalization" component={PersonalizationScreen} />
        ) : null}
        <Stack.Screen name="bottomTab" component={BottomNavigationBar} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "card", animation: "fade" }}>
        <Stack.Screen name="mapfullscreenModal" component={MapFullscreenModal} />
      </Stack.Group>
    </Stack.Navigator>
  )
})
