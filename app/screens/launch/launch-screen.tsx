import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleProp, ImageStyle, TextStyle, ImageBackground } from "react-native"
import { Text, Button } from "../../components"
import { spacing, color } from "../../theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const imageWrapper: StyleProp<ImageStyle> = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}

const TextStyling: TextStyle = {
  fontSize: 32,
  fontWeight: "bold",
  fontStyle: "normal",
  lineHeight: 36,
  letterSpacing: 0,
  textAlign: "center",
  color: color.background,
}

const TextStylingExplore: TextStyle = {
  fontSize: 32,
  fontWeight: "bold",
  fontStyle: "normal",
  lineHeight: 36,
  letterSpacing: 0,
  textAlign: "center",
  color: color.primary,
}

const TextWrapper: ViewStyle = {
  flex: 1,
  marginTop: spacing[8],
  justifyContent: "space-around",
  flexDirection: "column",
  alignItems: "center",
}

const subTextWrapper: ViewStyle = {
  marginTop: spacing[8],
}

const firstTextWrapper: ViewStyle = {
  flexDirection: "row",
}

const ButtonWrapper: ViewStyle = {
  marginTop: spacing[8],
  width: "100%",
}

const ButtonStyle: ViewStyle = {
  marginHorizontal: spacing[5],
}

const imageSource = require("../../../assets/images/launch.png")

export const LaunchScreen = observer(function LaunchScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={ROOT}>
      <ImageBackground source={imageSource} style={imageWrapper}>
        <View style={TextWrapper}>
          <View></View>
          <View style={subTextWrapper}>
            <View style={firstTextWrapper}>
              <Text style={TextStylingExplore} text="Explore " />
              <Text style={TextStyling} text="your " />
            </View>
            <Text style={TextStyling} text="surroundings" />
          </View>

          <View style={ButtonWrapper}>
            <Button style={ButtonStyle} text="Next" />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
})
