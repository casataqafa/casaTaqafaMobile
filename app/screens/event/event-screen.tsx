import React from "react"
import { observer } from "mobx-react-lite"
import {
  ImageBackground,
  View,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Share,
  StatusBar,
} from "react-native"
import { Button, Header, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import MapPinIcon from "../../../assets/svgs/map-pin-icon"
import LinkIcon from "../../../assets/svgs/link-icon"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const IMAGE_STYLE: ImageStyle = {
  flex: 2,
}

const HEADER_STYLE: ViewStyle = {
  marginHorizontal: spacing[5],
}

const HEADER: ViewStyle = {
  marginTop: spacing[5],
}

const TEXT_ROOT: ViewStyle = {
  alignItems: "center",
  marginTop: spacing[6],
  marginHorizontal: spacing[5],
}

const TEXT_HEADER: TextStyle = {
  lineHeight: 36,
  textAlign: "center",
  marginBottom: spacing[4],
}

const TEXT_SUBHEADER: TextStyle = {
  lineHeight: 24,
  textAlign: "center",
}

const DETAILS_ROOT: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginHorizontal: spacing[5],
  marginTop: spacing[5],
  paddingHorizontal: spacing[6],
}

const TEXT_DETAILS: TextStyle = {
  textAlign: "center",
  fontSize: 16,
  lineHeight: 24,
}

const ACTIONS_ROOT: ViewStyle = {
  flexDirection: "row",
  borderTopColor: color.line,
  borderTopWidth: 1,
  marginTop: spacing[6],
  justifyContent: "space-between",
  paddingHorizontal: spacing[5],
  paddingTop: spacing[4],
  paddingBottom: spacing[7],
}

const BUTTON_STYLE: ViewStyle = {
  borderRadius: 100,
  height: 48,
  width: 48,
  backgroundColor: color.palette.white,
  borderColor: color.line,
  borderWidth: 1,
}
export const EventScreen = observer(function EventScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()

  const onShare = async () => {
    try {
      await Share.share({
        message: "React Native | A framework for building native apps using React",
        title: "share title",
        url:
          "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const goBack = () => navigation.goBack()

  return (
    <View style={ROOT}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        }}
        style={IMAGE_STYLE}
      >
        <View style={HEADER_STYLE}>
          <Header
            style={HEADER}
            leftIcon="back"
            rightIcon="share"
            onLeftPress={goBack}
            onRightPress={onShare}
          />
        </View>
      </ImageBackground>

      <View>
        <View style={TEXT_ROOT}>
          <Text preset="header" text="Casamouja" style={TEXT_HEADER} />
          <Text
            preset="subheader"
            text="CASAMOUJA « urban art wave » est une opération street art qui propose."
            style={TEXT_SUBHEADER}
          />
        </View>
        <View style={DETAILS_ROOT}>
          <View>
            <Text preset="bold" style={TEXT_DETAILS} text="21 juin 2022" />
            <Text style={TEXT_DETAILS} text="Date" />
          </View>
          <View>
            <Text preset="bold" style={TEXT_DETAILS} text="16:00" />
            <Text style={TEXT_DETAILS} text="Temps" />
          </View>
        </View>

        <View style={ACTIONS_ROOT}>
          <Button style={BUTTON_STYLE}>
            <LinkIcon stroke={color.primary} size={20} />
          </Button>
          <Button text="Consulter le programme" />
          <Button style={BUTTON_STYLE}>
            <MapPinIcon stroke={color.primary} size={20} />
          </Button>
        </View>
      </View>
    </View>
  )
})
