import * as React from "react"
import { StyleProp, View, ViewStyle, TextInput, Animated } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing } from "../../theme"
import { Text } from "../text/text"

import { Screen } from "../screen/screen"
import { Button } from "../button/button"

import SearchIcon from "../../../assets/svgs/search-icon"

import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { MapScreenApi } from "../../services/api/map-screen-api"
import I18n from "i18n-js"
import { SearchCard } from ".."
import { useStores } from "../../models"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"
import { StackNavigationProp } from "@react-navigation/stack"

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

export interface MapFullscreenModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const MapFullscreenModal = observer(function MapFullscreenModal() {
  const [places, setPlaces] = useState([])
  const [searchValue, setSearchValue] = useState({})
  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()

  const goToLocation = () => navigation.navigate("place")

  // Pull in one of our MST stores
  const { navigationStore } = useStores()
  const { locationScreen } = navigationStore

  const setLocationScreen = async (location: typeof locationScreen) => {
    const locationSetup = await navigationStore.setLocationScreen(location)
    if (locationSetup) {
      goToLocation()
    }
  }

  useEffect(() => {
    async function getPlaces() {
      const mapscreenapi = new MapScreenApi()
      const firebaseplaces = await mapscreenapi.searchLocations(searchValue, I18n.currentLocale())

      if (firebaseplaces) {
        console.tron.log(firebaseplaces.places)

        setPlaces(firebaseplaces.places)
      }
    }

    getPlaces()
  }, [searchValue])

  return (
    <Screen style={CONTAINER}>
      <View style={SEARCH_HEADER_STYLE}>
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
              onChangeText={(e) => setSearchValue(e.toString())}
            />
          </View>
        </Button>
        <Button style={BUTTON_SPACING} preset="link" onPress={() => navigation.goBack()}>
          <Text text="Cancel" />
        </Button>
      </View>
      <View style={SEARCH_RESULT}>
        <Animated.FlatList
          showsVerticalScrollIndicator={false}
          data={places}
          renderItem={({ item }) => (
            <SearchCard onPress={() => setLocationScreen(item)} key={item} item={item} />
          )}
        />
      </View>
    </Screen>
  )
})
