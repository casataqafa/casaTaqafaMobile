import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle, View } from "react-native"
import { Header, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}

const HEADER: ViewStyle = {
  marginHorizontal: spacing[2],
}

const TITLE: TextStyle = {
  fontSize: 16,
  fontWeight: "600",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: color.palette.black,
}

const SUB_TITLE: TextStyle = {
  marginTop: spacing[5],
  fontSize: 16,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 24,
  letterSpacing: 0,
  textAlign: "left",
  color: "#090a0a",
}

const CONTENT: ViewStyle = {
  marginHorizontal: spacing[5],
  marginBottom: spacing[6],
}

const BLOCKS: ViewStyle = {
  marginTop: spacing[6],
}

export const TermsOfUseScreen = observer(function TermsOfUseScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()

  const goBack = () => navigation.goBack()
  return (
    <Screen style={ROOT} preset="scroll">
      <Header style={HEADER} leftIcon="back" headerText="Terms of use" onLeftPress={goBack} />

      <View style={CONTENT}>
        <Text text="Please read these terms of service, carefully before using our application." />
        <View style={BLOCKS}>
          <Text style={TITLE} text="1. Terms of use" />
          <Text
            style={SUB_TITLE}
            text="A day after the Centers for Disease Control and Prevention urged Americans to stay home for Thanksgiving, more than one million people in the United States got on planes, marking the second day that more.."
          />
        </View>
        <View style={BLOCKS}>
          <Text style={TITLE} text="2. Privacy Policy" />
          <Text
            style={SUB_TITLE}
            text="A day after the Centers for Disease Control and Prevention urged Americans to stay home for Thanksgiving, more than one million people in the United States got on planes, marking the second day that more.."
          />
        </View>
        <View style={BLOCKS}>
          <Text style={TITLE} text="3. Copyright" />
          <Text
            style={SUB_TITLE}
            text="A day after the Centers for Disease Control and Prevention urged Americans to stay home for Thanksgiving, more than one million people in the United States got on planes, marking the second day that more.."
          />
        </View>
      </View>
    </Screen>
  )
})
