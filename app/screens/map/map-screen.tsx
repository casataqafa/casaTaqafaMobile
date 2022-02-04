import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, Dimensions, View, Platform, Animated, Image } from "react-native"
import { ChipsFlatList, Screen, Text, Card } from "../../components"
import MapView from "react-native-maps"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SearchTextfieldButton } from "../../components/search-textfield-button/search-textfield-button"

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.transparent,
  // alignItems: "center",
  // justifyContent: "center",
  // paddingVertical: spacing[3],
}

const MAP_STYLE: ViewStyle = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  flex: 1,
  backgroundColor: "green",
}

const SEARCH_STYLE: ViewStyle = {
  position: "absolute",
  marginTop: Platform.OS === "ios" ? 43 : 45,
  width: "90%",
  alignSelf: "center",
}

const CHIPS_STYLING: ViewStyle = {
  position: "absolute",

  left: 0,
  right: 0,
  marginTop: Platform.OS === "ios" ? "28%" : "28%",
  alignSelf: "center",
  paddingHorizontal: spacing[4],
}

const placesItems = ({ item }) => (
  <Card preset="PlaceCard" style={{ marginRight: 180 }}>
    <Image
      style={{
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        height: "100%",
        aspectRatio: 1,
        marginBottom: spacing[3],
      }}
      source={{
        uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
      }}
    />

    <View
      style={{
        paddingRight: spacing[3],
        backgroundColor: "#f7f9fa",
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
      }}
    >
      <Text
        style={{
          marginTop: spacing[4],

          color: color.palette.black,

          marginLeft: spacing[4],
          width: "120%",
          height: "50%",

          fontSize: 18,
          fontWeight: "normal",
          fontStyle: "normal",
          letterSpacing: 0,
        }}
      >
        Théâtre Moulay Rachid
      </Text>
      <Text
        style={{
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
        }}
        numberOfLines={2}
      >
        Salle de spectacle
      </Text>
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
  // const navigation = useNavigation()
  return (
    <View style={ROOT}>
      <MapView style={MAP_STYLE} />
      <View style={SEARCH_STYLE}>
        <SearchTextfieldButton text="Search" />
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
