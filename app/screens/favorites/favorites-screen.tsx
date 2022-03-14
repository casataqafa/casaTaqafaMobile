import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle, Vibration } from "react-native"
import { FavoriteModal, Header, PlacesCard, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { FlatList } from "react-native-gesture-handler"

import { FavoriteScreenApi } from "../../services/api/favorite-screen-api"
import I18n from "i18n-js"
import { SafeAreaView } from "react-native-safe-area-context"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  paddingHorizontal: spacing[5],
}

const HEADER_STYLE: TextStyle = {
  marginBottom: spacing[3],
  textAlign: "center",
  lineHeight: 24,
  fontSize: 18,
}

const SUBHEADER_STYLE: TextStyle = {
  textAlign: "center",
  lineHeight: 20,
  fontSize: 14,
}

const EMPTY_STYLE: ViewStyle = {
  flexGrow: 2,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const FILLED_STYLE: ViewStyle = { flex: 1, width: "100%" }

export const FavoritesScreen = observer(function FavoritesScreen() {
  const ONE_SECOND_IN_MS = 1000
  // Pull in one of our MST stores
  const { userStore, navigationStore } = useStores()

  // use the user.uid
  const { user } = userStore

  const { locationScreen } = navigationStore

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()
  const goToLocation = () => navigation.navigate("place")

  const setLocationScreen = async (location: typeof locationScreen) => {
    const locationSetup = await navigationStore.setLocationScreen(location)
    if (locationSetup) {
      goToLocation()
    }
  }

  const [modalVisible, setModalVisible] = React.useState(false)
  const [places, setPlaces] = React.useState([])
  const [placeId, setPlaceId] = React.useState(null)
  const [photoUri, setPhotoUri] = React.useState(null)

  const modalToggle = (id?: number, photoUri?: string) => {
    Vibration.vibrate(10 * ONE_SECOND_IN_MS)
    setModalVisible(!modalVisible)
    setPlaceId(id)
    setPhotoUri(photoUri)
  }

  // to get favorites call this
  const favoriteapi = new FavoriteScreenApi()

  async function getfavs() {
    // array of favorites
    const favorites = await favoriteapi.getFavorites(user.uid, I18n.currentLocale())

    setPlaces(favorites.places)
  }
  async function deletfav() {
    const isDeleted = await favoriteapi.deleteFavorites(placeId, user.uid)

    if (isDeleted) {
      // location was removed from favorites update the list

      setModalVisible(false)
      if (places === undefined || places === null) {
        setPlaces([])
      }
      getfavs()
    }
  }

  useEffect(() => {
    getfavs()
  }, [])

  return (
    <SafeAreaView style={ROOT}>
      <Header headerText="Saved items" />
      {places === undefined ? (
        <View style={EMPTY_STYLE}>
          <Text style={HEADER_STYLE} preset="header" text="Liste des favoris est vide" />
          <Text
            style={SUBHEADER_STYLE}
            preset="subheader"
            text="Explorez de nouveaux lieux et ajoutez-les à vos favoris"
          />
        </View>
      ) : (
        <View style={FILLED_STYLE}>
          <FavoriteModal
            photoUri={photoUri}
            deletePlace={deletfav}
            canceller={modalToggle}
            toggler={modalVisible}
          />

          <FlatList
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            data={places}
            renderItem={({ item }) => (
              <PlacesCard
                onLongPress={() => modalToggle(item.id, item.photoUri)}
                onPress={() => setLocationScreen(item)}
                style={{ marginBottom: spacing[5] }}
                key={item.id}
                item={item}
              />
            )}
          />
        </View>
      )}
      {/* <View style={EMPTY_STYLE}>
        <Text style={HEADER_STYLE} preset="header" text="Liste des favoris est vide" />
        <Text
          style={SUBHEADER_STYLE}
          preset="subheader"
          text="Explorez de nouveaux lieux et ajoutez-les à vos favoris"
        />
      </View> */}
    </SafeAreaView>
  )
})
