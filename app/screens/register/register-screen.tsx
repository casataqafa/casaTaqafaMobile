import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import {
  Button,
  Devider,
  FacebookButton,
  GoogleButton,
  Header,
  Screen,
  Text,
  TextField,
} from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { goBack, NavigatorParamList } from "../../navigators"
import { StackNavigationProp } from "@react-navigation/stack"

const ROOT: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[5],
  flex: 1,
}

const TEXTFIELDSTYLE: TextStyle = {
  marginBottom: spacing[4],
}

const TEXTSTYLE: TextStyle = {
  marginBottom: spacing[6],
  color: color.dim,
  fontSize: 14,
  fontWeight: "normal",
}

const SOCIALMEDIASECTION: TextStyle = {
  marginTop: spacing[6],
}

const DEVIDER: ViewStyle = {
  marginBottom: spacing[5],
}

const FOOTER: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "flex-end",
  marginBottom: spacing[7],
}
const FOOTER_CONTENT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  flexWrap: "wrap",
}

const FOOTERTEXTSTYLE: TextStyle = {
  color: color.primary,
  fontSize: 12,
  fontWeight: "normal",
}

const AGREEMENT_STYLE: TextStyle = {
  fontSize: 12,
  fontWeight: "normal",
}

const FULL: ViewStyle = { backgroundColor: color.transparent, flex: 1 }
export const RegisterScreen = observer(function RegisterScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<NavigatorParamList>>()

  const goToPersonalization = () => navigation.navigate("personalization")
  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <Header leftIcon="back" headerText="Register" onLeftPress={goBack} />
        <View>
          <View>
            <TextField style={TEXTFIELDSTYLE} placeholder="Name" />
            <TextField style={TEXTFIELDSTYLE} placeholder="Email" />
            <TextField style={TEXTFIELDSTYLE} placeholder="Password" preset="password" />
            <Text style={TEXTSTYLE} text="Must be at least 8 characters." />
            <Button text="Register" onPress={goToPersonalization} />
          </View>
          <View style={SOCIALMEDIASECTION}>
            <Devider style={DEVIDER} />
            <GoogleButton />
            <FacebookButton />
          </View>
        </View>
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}>
            <Text style={AGREEMENT_STYLE} text="By continuing, you agree to our " />
            <Text style={FOOTERTEXTSTYLE} text="Terms of service " />
            <Text style={AGREEMENT_STYLE} text="and  " />
            <Text style={FOOTERTEXTSTYLE} text="Privacy Policy." />
          </View>
          <View></View>
        </SafeAreaView>
      </Screen>
    </View>
  )
})
