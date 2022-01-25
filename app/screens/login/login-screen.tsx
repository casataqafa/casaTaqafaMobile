import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { Header, Screen, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.transparent,
  flex: 1,
}

const VIEWCONTAINER: ViewStyle = {
  paddingHorizontal: spacing[5],
}

const TEXTSTYLE: TextStyle = {
  marginBottom: 16,
}

const FULL: ViewStyle = { backgroundColor: color.transparent, flex: 1 }

export const LoginScreen = observer(function LoginScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="fixed">
        <Header headerText="Login" />
        <View style={VIEWCONTAINER}>
          <View>
            <TextField style={TEXTSTYLE} placeholder="Email" />
            <TextField style={TEXTSTYLE} placeholder="Password" preset="password" />
          </View>
        </View>
      </Screen>
    </View>
  )
})
