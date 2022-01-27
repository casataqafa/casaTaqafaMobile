import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, ButtonFlatList, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const ROOT: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[5],
  flex: 1,
}

const HEADER_CONTAINER: ViewStyle = {
  marginTop: spacing[6],
  alignItems: "center",
}

const HEADER_STYLE: TextStyle = {
  marginBottom: spacing[1],
  lineHeight: 36,
}

const SUBHEADER_STYLE: TextStyle = {
  color: color.dim,
  lineHeight: 24,
}

const LISTVIEW_STYLE: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  marginTop: spacing[5],
  marginBottom: spacing[5],
}

const CONTINUEBUTTON_STYLE: ViewStyle = {
  marginBottom: spacing[6],
}

export const PersonalizationScreen = observer(function PersonalizationScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="fixed">
      <View style={HEADER_CONTAINER}>
        <Text style={HEADER_STYLE} preset="header" text="Tell us your interest" />
        <Text style={SUBHEADER_STYLE} preset="subheader" text="So we can recommend you places" />
      </View>
      <SafeAreaProvider style={LISTVIEW_STYLE}>
        <ButtonFlatList />
        <Button style={CONTINUEBUTTON_STYLE} preset="disabled" text="Continue" />
      </SafeAreaProvider>
    </Screen>
  )
})
