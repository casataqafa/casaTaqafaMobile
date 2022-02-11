import React from "react"
import { observer } from "mobx-react-lite"
import { ImageBackground, View, ViewStyle, ImageStyle, TextStyle } from "react-native"
import { Button, Header, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import MapIcon from "../../../assets/svgs/map-icon"
import MapPinIcon from "../../../assets/svgs/map-pin-icon"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const IMAGE_STYLE: ImageStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}

const HEADER_STYLE: ViewStyle = {
  marginHorizontal: spacing[5],
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
}
export const EventScreen = observer(function EventScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <SafeAreaProvider style={ROOT}>
      <SafeAreaView style={ROOT}>
        <ImageBackground
          source={{
            uri:
              "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          }}
          style={IMAGE_STYLE}
        />

        <View style={HEADER_STYLE}>
          <Header leftIcon="back" rightIcon="share" />
        </View>
      </SafeAreaView>

      <SafeAreaProvider>
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
          <Button
            style={{
              borderRadius: 100,
              height: 48,
              width: 48,
              backgroundColor: color.palette.white,
              borderColor: color.line,
              borderWidth: 1,
            }}
          ></Button>
          <Button text="Consulter le programme" />
          <Button
            style={{
              borderRadius: 100,
              height: 48,
              width: 48,
              backgroundColor: color.palette.white,
              borderColor: color.line,
              borderWidth: 1,
            }}
          >
            <MapPinIcon
              style={{ marginTop: spacing[1], marginLeft: spacing[1] }}
              stroke="black"
              size={25}
            />
          </Button>
        </View>
      </SafeAreaProvider>
    </SafeAreaProvider>
  )
})
