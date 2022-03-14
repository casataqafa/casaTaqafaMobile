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
  Platform,
} from "react-native"
import { Button, Header, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import MapPinIcon from "../../../assets/svgs/map-pin-icon"
import LinkIcon from "../../../assets/svgs/link-icon"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"
import * as Linking from "expo-linking"
import { EventScreenApi } from "../../services/api/event-screen-api"

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
  marginTop: spacing[6],
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
  justifyContent: "center",
  // marginHorizontal: spacing[5],
  // marginTop: spacing[5],
  // paddingHorizontal: spacing[6],
}

const DETAILS_SECTION: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
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
  const { navigationStore } = useStores()

  const { eventScreen, locationScreen } = navigationStore

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()

  const goBack = () => navigation.goBack()
  const goToPlace = () => navigation.navigate("place")
  const goToProgram = () => {
    // setting up the evetn program screen
    navigation.navigate("eventProgram")
  }

  const openWebsite = () => Linking.openURL(eventScreen.link)

  const onShare = async () => {
    try {
      await Share.share({
        message: "CasaTaqafa",
        title: eventScreen.name,
        url: eventScreen.photoUri,
      })
    } catch (error) {
      alert(error.message)
    }
  }

  React.useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setTranslucent(true)
    }

    async function fetchPlaceData() {
      const eventapi = new EventScreenApi()
      const firestorePlaces = await eventapi.getLocation(eventScreen.placeId)
      navigationStore.setLocationScreen(firestorePlaces.place)
    }

    fetchPlaceData()
  }, [])

  return (
    <View style={ROOT}>
      <StatusBar backgroundColor="transparent" />
      <ImageBackground
        source={{
          uri: eventScreen.photoUri,
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
          <Text preset="header" text={eventScreen.name} style={TEXT_HEADER} />
          <Text preset="subheader" text={eventScreen.description} style={TEXT_SUBHEADER} />
        </View>
        <View style={DETAILS_SECTION}>
          <View style={DETAILS_ROOT}>
            <View>
              <Text preset="bold" style={TEXT_DETAILS} text={eventScreen.date + " "} />
            </View>
            <View>
              <Text preset="bold" style={TEXT_DETAILS} text={eventScreen.time} />
            </View>
          </View>

          <Text style={TEXT_DETAILS} text={locationScreen.name} />
        </View>

        <View style={ACTIONS_ROOT}>
          <Button style={BUTTON_STYLE} onPress={openWebsite}>
            <LinkIcon stroke={color.primary} size={20} />
          </Button>
          <Button text="Consulter le programme" onPress={goToProgram} />
          <Button style={BUTTON_STYLE} onPress={goToPlace}>
            <MapPinIcon stroke={color.primary} size={20} />
          </Button>
        </View>
      </View>
    </View>
  )
})
