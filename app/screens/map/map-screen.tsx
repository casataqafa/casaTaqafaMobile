import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Animated, Image, StatusBar, TextStyle } from "react-native"
import { ChipsFlatList, Screen, Text, Card } from "../../components"
import MapView from "react-native-maps"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SearchTextfieldButton } from "../../components/search-textfield-button/search-textfield-button"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"
import { ImageStyle } from "react-native"

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.transparent,
}

const MAP_STYLE: ViewStyle = {
  width: "100%",
  height: "100%",
}

const SEARCH_STYLE: ViewStyle = {
  paddingHorizontal: spacing[5],
  position: "absolute",
  marginTop: spacing[7],
  width: "100%",
  alignSelf: "center",
}

const CHIPS_STYLING: ViewStyle = {
  position: "absolute",

  left: 0,
  right: 0,
  top: 100,
  alignSelf: "center",
  marginTop: spacing[2],

  paddingLeft: spacing[5],
}

const TEXT_WRAPPER: ViewStyle = {
  paddingRight: spacing[3],
  backgroundColor: "#f7f9fa",
  borderTopRightRadius: 16,
  borderBottomRightRadius: 16,
}

const TITLE_STYLING: TextStyle = {
  marginTop: spacing[4],

  color: color.palette.black,

  marginLeft: spacing[4],

  height: "50%",

  fontSize: 18,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
}

const SUBTITLE_STYLING: TextStyle = {
  color: color.palette.black,
  marginLeft: spacing[4],

  width: 188,
  height: 68.2,
  paddingVertical: spacing[2],
  marginTop: -24,
  fontSize: 15,
  fontWeight: "200",
  fontStyle: "normal",
  letterSpacing: 0,
}

const IMAGE_STYLING: ImageStyle = {
  borderTopLeftRadius: 16,
  borderBottomLeftRadius: 16,
  height: "100%",
  aspectRatio: 1,
  marginBottom: spacing[3],
}

const CARD_SPACING: ViewStyle = {
  marginRight: 180,
}

const placesItems = ({ item }) => (
  <Card preset="PlaceCard" style={CARD_SPACING}>
    <Image
      style={IMAGE_STYLING}
      source={{
        uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
      }}
    />

    <View style={TEXT_WRAPPER}>
      <Text style={TITLE_STYLING} text="Théâtre Moulay Rachid" />
      <Text style={SUBTITLE_STYLING} numberOfLines={2} text="Salle de spectacle" />
    </View>
  </Card>
)

const dataPlaces = [
  {
    id: "1",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "2",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "3",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "4",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
]

const ANIMATED_STYLES: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  paddingVertical: 16,
  paddingHorizontal: spacing[5],
}

export const MapScreen = observer(function MapScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()

  const goToSearchScreen = () => navigation.navigate("mapfullscreenModal")
  return (
    <View style={ROOT}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <MapView style={MAP_STYLE} />
      <View style={SEARCH_STYLE}>
        <SearchTextfieldButton onPress={goToSearchScreen} text="Search" />
      </View>
      <ChipsFlatList style={CHIPS_STYLING} />
      <Animated.FlatList
        style={ANIMATED_STYLES}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={dataPlaces}
        renderItem={placesItems}
      ></Animated.FlatList>
    </View>
  )
})
