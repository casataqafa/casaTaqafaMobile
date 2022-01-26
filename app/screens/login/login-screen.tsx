import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import {
  Button,
  Header,
  Screen,
  TextField,
  Text,
  Devider,
  GoogleButton,
  FacebookButton,
} from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"

const ROOT: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[5],
  flex: 1,
}

const TEXTFIELDSTYLE: TextStyle = {
  marginBottom: spacing[4],
}

const TEXTSTYLE: TextStyle = {
  marginTop: spacing[4],
  color: color.primary,
  fontSize: 16,
  fontWeight: "normal",
}

const SOCIALMEDIASECTION: TextStyle = {
  marginTop: spacing[8],
}

const DEVIDER: ViewStyle = {
  marginBottom: spacing[5],
}

const FOOTER: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "flex-end",
  marginBottom: spacing[8],
}
const FOOTER_CONTENT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}

const FOOTERTEXTSTYLE: TextStyle = {
  color: color.primary,
  fontSize: 16,
  fontWeight: "500",
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
        <View>
          <View>
            <TextField style={TEXTFIELDSTYLE} placeholder="Email" />
            <TextField style={TEXTFIELDSTYLE} placeholder="Password" preset="password" />
            <Button text="Login" />
            <Text style={TEXTSTYLE} text="Forgot Password?" />
          </View>
          <View style={SOCIALMEDIASECTION}>
            <Devider style={DEVIDER} />
            <GoogleButton />
            <FacebookButton />
          </View>
        </View>
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}>
            <Text text="Don't have an account? " />
            <Text style={FOOTERTEXTSTYLE} text="Register" />
          </View>
          <View></View>
        </SafeAreaView>
      </Screen>
    </View>
  )
})
