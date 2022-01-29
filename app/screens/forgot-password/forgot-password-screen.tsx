import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Header, Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"

import { goBack } from "../../navigators"

const ROOT: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[5],
  flex: 1,
}

const TEXTFIELDSTYLE: TextStyle = {
  marginBottom: spacing[4],
}

const TEXTSTYLE: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
  color: color.text,
  marginBottom: spacing[4],
}

const CONTAINER: ViewStyle = {
  marginBottom: spacing[8],
}

const FULL: ViewStyle = { backgroundColor: color.transparent, flex: 1 }

export const ForgotPasswordScreen = observer(function ForgotPasswordScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <Header leftIcon="back" headerText="Forgot Password" onLeftPress={goBack} />
        <View style={CONTAINER}>
          <Text style={TEXTSTYLE} preset="fieldLabel" text="Enter your email address" />
          <TextField style={TEXTFIELDSTYLE} placeholder="Email" />
        </View>
        <Button text="Continue" />
      </Screen>
    </View>
  )
})
