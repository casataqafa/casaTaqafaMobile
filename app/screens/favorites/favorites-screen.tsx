import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { Header, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { FavoriteScreenApi } from "../../services/api/favorite-screen-api"
import I18n from "i18n-js"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  marginHorizontal: spacing[5],
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

export const FavoritesScreen = observer(function FavoritesScreen() {
  // Pull in one of our MST stores
  const { userStore } = useStores()

  // use the user.uid
  const { user } = userStore

  // Pull in navigation via hook
  // const navigation = useNavigation()

  // to get favorites call this
  const favoriteapi = new FavoriteScreenApi()

  async function getfavs() {
    // array of favorites
    const favorites = await favoriteapi.getFavorites(user.uid, I18n.currentLocale())
  }
  async function deletfav() {
    const isDeleted = await favoriteapi.deleteFavorites("idOfLocationToBeDELETED", user.uid)

    if (isDeleted) {
      // location was removed from favorites update the list
    }
  }
  return (
    <Screen style={ROOT} preset="scroll">
      <Header headerText="Saved items" />
      <View style={EMPTY_STYLE}>
        <Text style={HEADER_STYLE} preset="header" text="Liste des favoris est vide" />
        <Text
          style={SUBHEADER_STYLE}
          preset="subheader"
          text="Explorez de nouveaux lieux et ajoutez-les à vos favoris"
        />
      </View>
    </Screen>
  )
})
