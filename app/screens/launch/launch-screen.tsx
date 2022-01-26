import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleProp, ImageStyle, TextStyle } from "react-native"
import { Text } from "../../components"
import { ImageBackground } from "react-native"
import { spacing } from "../../theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { Button } from "../../components"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const imageWrapper: StyleProp<ImageStyle> = {
  flex: 1,
  width: "100%",
  height: "100%",
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

const ButtonStyle: ViewStyle = {
  width: 279,
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

          <View style={subTextWrapper}>
            <Button style={ButtonStyle} text="Next"></Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
})
