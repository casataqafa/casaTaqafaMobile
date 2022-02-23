import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle, Vibration } from "react-native"
import { FavoriteModal, Header, PlacesCard, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { FlatList } from "react-native-gesture-handler"

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
const dataPlaces = [
  {
    id: "1",
    name: "Théâtre Moulay Rachid",
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
    name: "Théâtre Moulay Rachid",
    subtitle: "Salle de spectacle",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "4",
    name: "Théâtre Moulay Rachid",
    subtitle: "Salle de spectacle",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "5",
    name: "Théâtre Moulay Rachid",
    subtitle: "Salle de spectacle",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "6",
    name: "Théâtre Moulay Rachid",
    subtitle: "Salle de spectacle",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
]

const FILLED_STYLE: ViewStyle = { flex: 1, width: "100%" }

export const FavoritesScreen = observer(function FavoritesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const ONE_SECOND_IN_MS = 1000

  const [modalVisible, setModalVisible] = React.useState(false)

  const modalToggle = () => {
    Vibration.vibrate(10 * ONE_SECOND_IN_MS)
    setModalVisible(!modalVisible)
  }

  return (
    <Screen style={ROOT} preset="fixed">
      <Header headerText="Saved items" />
      {/* <View style={EMPTY_STYLE}>
        <Text style={HEADER_STYLE} preset="header" text="Liste des favoris est vide" />
        <Text
          style={SUBHEADER_STYLE}
          preset="subheader"
          text="Explorez de nouveaux lieux et ajoutez-les à vos favoris"
        />
      </View> */}
      <View style={FILLED_STYLE}>
        <FavoriteModal canceller={modalToggle} toggler={modalVisible} />
        <FlatList
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          data={dataPlaces}
          renderItem={({ item }) => (
            <PlacesCard
              onLongPress={modalToggle}
              //onPress={() => setModalVisible(true)}
              style={{ marginBottom: spacing[5] }}
              key={item.id}
              item={item}
            />
          )}
        />
      </View>
    </Screen>
  )
})
