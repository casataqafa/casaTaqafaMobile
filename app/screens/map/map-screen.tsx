import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Animated, StatusBar, Platform } from "react-native"
import MapView, { Marker } from "react-native-maps"

import { ChipsFlatList, PlacesCard } from "../../components"

import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SearchTextfieldButton } from "../../components/search-textfield-button/search-textfield-button"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"
import * as Location from "expo-location"
import { MapScreenApi } from "../../services/api/map-screen-api"
import I18n from "i18n-js"

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
  marginRight: 240,
}

const ANIMATED_STYLES: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  paddingVertical: 16,
  paddingHorizontal: spacing[5],
}

export const MapScreen = observer(function MapScreen() {
  const [location, setLocation] = React.useState({
    latitude: 33.59498270423478,
    longitude: -7.618721485534569,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.03421,
  })
  const [places, setPlaces] = React.useState(null)
  const flatListRef = React.useRef(null)

  // Pull in one of our MST stores
  const { navigationStore } = useStores()

  const { mapScreen, locationScreen } = navigationStore

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()

  const goToSearchScreen = () => navigation.navigate("mapfullscreenModal")
  const goToLocation = () => navigation.navigate("place")

  const setLocationScreen = async (location: typeof locationScreen) => {
    const locationSetup = await navigationStore.setLocationScreen(location)
    if (locationSetup) {
      goToLocation()
    }
  }

  const getPlaces = async (category) => {
    if (location !== null) {
      // sending the user location to get places near the user
      const mapscreenapi = new MapScreenApi()
      const firestoreplaces = await mapscreenapi.getLocations(
        location,
        I18n.currentLocale(),
        category,
      )

      if (firestoreplaces) {
        setPlaces(firestoreplaces.places)
      }
    }
  }

  const scrollToCard = (index) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: true, index: index })
    }
  }

  React.useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setTranslucent(true)
    }

    async function getCoordinates() {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        getPlaces(mapScreen)
        return
      }

      const userLocation = await Location.getCurrentPositionAsync({})

      if (userLocation) {
        setLocation({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
          latitudeDelta: 0.0522,
          longitudeDelta: 0.03421,
        })

        getPlaces(mapScreen)
      }
    }

    getCoordinates()
  }, [mapScreen])

  return (
    <View style={ROOT}>
      <StatusBar backgroundColor="transparent" />
      <MapView
        style={MAP_STYLE}
        provider="google"
        initialRegion={location}
        loadingEnabled={true}
        loadingIndicatorColor={color.primary}
        showsUserLocation={true}
        showsCompass={false}
      >
        {places
          ? places.map((place, index) => (
              <Marker
                onPress={() => scrollToCard(index)}
                flat={true}
                pinColor={color.primary}
                key={index}
                coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                title={place.name}
                description={place.description}
              />
            ))
          : null}
      </MapView>
      <View style={SEARCH_STYLE}>
        <SearchTextfieldButton onPress={goToSearchScreen} text="Search" />
      </View>
      <ChipsFlatList style={CHIPS_STYLING} />
      <Animated.FlatList
        ref={flatListRef}
        style={ANIMATED_STYLES}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={places}
        renderItem={({ item }) => (
          <PlacesCard
            onPress={() => setLocationScreen(item)}
            style={CARD_SPACING}
            key={item}
            item={item}
          />
        )}
      />
    </View>
  )
})
