import React from "react"
import { observer } from "mobx-react-lite"
import {
  ImageBackground,
  ImageStyle,
  StatusBar,
  View,
  ViewStyle,
  Dimensions,
  TextStyle,
  Platform,
} from "react-native"
import { Button, Header, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native-gesture-handler"
import * as Linking from "expo-linking"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const TEXT_CONTAINER: ViewStyle = {
  marginHorizontal: spacing[5],
  paddingBottom: spacing[5],
}

const IMAGE_STYLE: ImageStyle = {
  resizeMode: "contain",
  height: Dimensions.get("window").width / 1,
}

const HEADER_STYLE: ViewStyle = {
  marginHorizontal: spacing[5],
}

const HEADER: ViewStyle = {
  marginTop: spacing[6],
}

const SUB_HEADER_TEXT: TextStyle = {
  fontSize: 12,
  color: color.palette.lightGrey,
  lineHeight: 16,
  fontWeight: "500",
  marginTop: spacing[3],
}

const DESCRIPTION_STYLE: TextStyle = {
  textAlign: "justify",
  lineHeight: 24,
  marginVertical: spacing[6],
}

const INFORMATION_HEADER: TextStyle = {
  lineHeight: 20,
  fontWeight: "bold",
}

const INFORMATION_URL: TextStyle = {
  lineHeight: 20,
  color: color.primary,
}

const FOOTER: ViewStyle = {
  justifyContent: "flex-end",
  marginBottom: spacing[6],
  borderTopColor: color.line,
  borderTopWidth: 1,
  paddingHorizontal: spacing[5],
}

const FOOTER_TEXT_CONTAINER: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginVertical: spacing[4],
}

const FOOTER_HEADER: TextStyle = { color: color.palette.lightGrey }

const FOOTER_TEXT: TextStyle = { lineHeight: 20, fontWeight: "bold" }

export const ArtistScreen = observer(function ArtistScreen() {
  const [yPosition, setYPosition] = React.useState(0)
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()

  const goBack = () => navigation.goBack()

  const openWebsite = () => Linking.openURL("https://wecasablanca.ma")

  const handleScroll = (e) => {
    setYPosition(e.nativeEvent.contentOffset.y)
  }

  React.useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setTranslucent(true)
    }
  }, [])
  return (
    <View style={ROOT}>
      <StatusBar backgroundColor={yPosition <= 60 ? "transparent" : "white"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <ImageBackground
          source={{
            uri:
              "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          }}
          style={IMAGE_STYLE}
        >
          <View style={HEADER_STYLE}>
            <Header style={HEADER} leftIcon="back" onLeftPress={goBack} />
          </View>
        </ImageBackground>

        <SafeAreaView>
          <View style={TEXT_CONTAINER}>
            <Text preset="header" text="Michael casablanca" />
            <Text
              style={SUB_HEADER_TEXT}
              preset="subheader"
              text="Du mer. 05 janv. 22 au mer. 26 janv. 22"
            />

            <Text
              style={DESCRIPTION_STYLE}
              text="A day after the Centers for Disease Control and Prevention urged Americans to stay home for Thanksgiving, more than one million people in the United States got on planes, marking the second day that more than a million people have flown since March. Nearly three million additional people have flown in the days since."
            />

            <Text style={INFORMATION_HEADER} text="Plus d’information" />
            <Button preset="link" onPress={openWebsite}>
              <Text style={INFORMATION_URL} text="https://wecasablanca.ma" />
            </Button>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={FOOTER}>
        <View style={FOOTER_TEXT_CONTAINER}>
          <Text style={FOOTER_HEADER} text="Prix ticket" />
          <Text style={FOOTER_TEXT} text="43.00 MAD" />
        </View>
        <Button text="Acheter maintenant" />
      </View>
    </View>
  )
})
