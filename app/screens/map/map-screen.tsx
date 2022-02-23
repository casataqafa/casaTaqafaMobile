import React from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  View,
  Animated,
  Image,
  StatusBar,
  TextStyle,
  ImageStyle,
  Platform,
} from "react-native"
import { ChipsFlatList, Text, Card, PlacesCard } from "../../components"
import MapView from "react-native-maps"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SearchTextfieldButton } from "../../components/search-textfield-button/search-textfield-button"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"

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

const CARD_SPACING: ViewStyle = {
  marginRight: 210,
}

const dataPlaces = [
  {
    id: "1",
    name: "Cinema",
    subtitle: "Salle de spectacle",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "2",
    name: "Théâtre Moulay Rachid",
    subtitle: "Salle de spectacle",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "3",
    name: "Cinema",
    subtitle: "Salle de spectacle",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "4",
    name: "Cinema",
    subtitle: "Salle de spectacle",
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

  React.useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setTranslucent(true)
    }
  }, [])

  return (
    <View style={ROOT}>
      <StatusBar backgroundColor="transparent" />
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
        renderItem={({ item }) => <PlacesCard style={CARD_SPACING} key={item.id} item={item} />}
      ></Animated.FlatList>
    </View>
  )
})
