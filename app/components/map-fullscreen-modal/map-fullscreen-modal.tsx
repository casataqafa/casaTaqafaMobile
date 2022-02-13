import * as React from "react"
import {
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  TextInput,
  Animated,
  Image,
  ImageStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography, spacing } from "../../theme"
import { Text } from "../text/text"

import { Screen } from "../screen/screen"
import { Button } from "../button/button"
import { Card } from "../card/card"
import SearchIcon from "../../../assets/svgs/search-icon"

import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"

const CONTAINER: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing[5],

  backgroundColor: color.palette.white,

  height: "100%",
}

const SEARCH_HEADER_STYLE: ViewStyle = {
  flexDirection: "row",

  marginTop: spacing[2],
}

const VIEW_STYLES: ViewStyle = {
  backgroundColor: "#F2F4F5",
  flex: 1,
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[3],
  borderRadius: 48,
  flexDirection: "row",
}

const ICON_STYLE: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginTop: spacing[3],
}

const BUTTON_STYLE: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  width: "100%",
  // alignItems: "center",
  //backgroundColor: "green",
}

const INPUT_WRAPPER: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const BUTTON_SPACING: ViewStyle = {
  marginLeft: spacing[4],
}

const SEARCH_RESULT: ViewStyle = { marginTop: spacing[5] }

const SearchInput = () => (
  <Button style={VIEW_STYLES}>
    <View style={ICON_STYLE}>
      <SearchIcon size={18} stroke={"#090A0A"} />
    </View>
    <View style={INPUT_WRAPPER}>
      <TextInput
        autoFocus={true}
        placeholder={"Search"}
        placeholderTextColor={color.palette.lightGrey}
        underlineColorAndroid={color.transparent}
        style={BUTTON_STYLE}
      />
    </View>
  </Button>
)

const TITLE_STYLING: TextStyle = {
  fontSize: 16,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 20,
  letterSpacing: 0,
  textAlign: "left",

  color: color.palette.black,

  marginLeft: spacing[4],
}

const SUBTITLE_STYLING: TextStyle = {
  color: color.palette.lightGrey,
  marginLeft: spacing[4],

  marginTop: spacing[1],
  width: 174,
  height: 20,

  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 16,
  letterSpacing: 0,
  textAlign: "left",
}

const IMG_STYLING: ImageStyle = {
  borderRadius: 40,
  width: "30%",
  height: "30%",
  aspectRatio: 1,
  marginBottom: spacing[3],
}

const TEXT_WRAPPER: ViewStyle = {
  paddingRight: spacing[3],

  borderTopRightRadius: spacing[4],
  borderBottomRightRadius: spacing[4],
}
const placesItems = ({ item }) => (
  <Card preset="PlaceCard">
    <Image
      style={IMG_STYLING}
      source={{
        uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
      }}
    />

    <View style={TEXT_WRAPPER}>
      <Text style={TITLE_STYLING} text="Théâtre Moulay Rachid" />
      <Text style={SUBTITLE_STYLING} text="Salle de spectacle" numberOfLines={2} />
    </View>
  </Card>
)

const dataPlaces = [
  {
    id: "1",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "2",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "3",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "4",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "5",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "6",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "7",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
]

export interface MapFullscreenModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const MapFullscreenModal = observer(function MapFullscreenModal(
  props: MapFullscreenModalProps,
) {
  const [loaded, setLoaded] = useState(true)
  const [regions, setRegions] = useState([])
  const [filteredRegions, setFilteredRegions] = useState([])
  const [selectedValue, setSelectedValue] = useState({})
  const navigation = useNavigation()

  useEffect(() => {
    setRegions(dataPlaces)
  }, [])

  return (
    <Screen style={CONTAINER}>
      <View style={SEARCH_HEADER_STYLE}>
        <SearchInput />
        <Button style={BUTTON_SPACING} preset="link" onPress={() => navigation.goBack()}>
          <Text text="Cancel" />
        </Button>
      </View>
      <View style={SEARCH_RESULT}>
        {loaded ? (
          <Animated.FlatList
            showsVerticalScrollIndicator={false}
            data={dataPlaces}
            renderItem={placesItems}
          ></Animated.FlatList>
        ) : (
          <Text text="No data" />
        )}
      </View>
    </Screen>
  )
})
