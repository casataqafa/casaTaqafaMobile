import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image, FlatList, TextStyle, ImageStyle } from "react-native"
import { Screen, Text, Header, Card } from "../../components"
import { goBack } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { color, spacing } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[5],
  flex: 1,
}
const FULL: ViewStyle = { backgroundColor: color.transparent, flex: 1 }

const FLATLIST_WRAPPER: ViewStyle = { marginTop: spacing[5], flexGrow: 1 }

const TEXT_TITLE: TextStyle = {
  fontWeight: "bold",
  color: color.palette.black,
  marginBottom: spacing[2],
  fontSize: 16,
  //width: "100%",

  marginLeft: spacing[4],
  lineHeight: spacing[5],
  textAlign: "left",
}

const TEXT_SUBTITLE: TextStyle = {
  fontWeight: "normal",
  marginBottom: spacing[2],
  color: color.palette.lightGrey,
  marginLeft: spacing[4],

  fontSize: 12,
  lineHeight: 16,
  textAlign: "left",
}

const IMG_STYLE: ImageStyle = {
  borderRadius: 16,

  aspectRatio: 1,
}

const dataEvents = [
  {
    id: "1",
    name: "Le Wecasablanca Festival a pour objectif  mettre en avant",
    subtitle: "Du mer. 05 janv. 22 au mer. 26 janv. 22",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "2",
    name: "Le Wecasablanca Festival a pour objectif  mettre en avant",
    subtitle: "Du mer. 05 janv. 22 au mer. 26 janv. 22",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "3",
    name: "Le Wecasablanca Festival a pour objectif  mettre en avant",
    subtitle: "Du mer. 05 janv. 22 au mer. 26 janv. 22",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "4",
    name: "Le Wecasablanca Festival a pour objectif  mettre en avant",
    subtitle: "Du mer. 05 janv. 22 au mer. 26 janv. 22",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "5",
    name: "Le Wecasablanca Festival a pour objectif  mettre en avant",
    subtitle: "Du mer. 05 janv. 22 au mer. 26 janv. 22",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "6",
    name: "Le Wecasablanca Festival a pour objectif  mettre en avant",
    subtitle: "Du mer. 05 janv. 22 au mer. 26 janv. 22",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "7",
    name: "Le Wecasablanca Festival a pour objectif  mettre en avant",
    subtitle: "Du mer. 05 janv. 22 au mer. 26 janv. 22",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "8",
    name: "Le Wecasablanca Festival a pour objectif  mettre en avant",
    subtitle: "Du mer. 05 janv. 22 au mer. 26 janv. 22",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "9",
    name: "Le Wecasablanca Festival a pour objectif  mettre en avant",
    subtitle: "Du mer. 05 janv. 22 au mer. 26 janv. 22",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
]

const CARD_STYLE: ViewStyle = {
  marginBottom: spacing[5],
  flex: 1,

  maxWidth: "75%",
}

const TEXT_HEADER: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
  color: color.palette.black,
}

const renderItem = ({ item }) => (
  <Card style={CARD_STYLE} preset="ArtistCard">
    <Image
      style={IMG_STYLE}
      source={{
        uri: item.uri,
      }}
    />

    <View style={{}}>
      <Text numberOfLines={2} style={TEXT_TITLE} text={item.name} />

      <Text style={TEXT_SUBTITLE} numberOfLines={2} text={item.subtitle} />
    </View>
  </Card>
)

export const EventProgramScreen = observer(function EventProgramScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={FULL}>
      <Screen preset="fixed" style={ROOT}>
        <Header leftIcon="back" headerText="Les artists" onLeftPress={goBack} />

        <Text text="Artistes récents" style={TEXT_HEADER} />

        <SafeAreaProvider style={FLATLIST_WRAPPER}>
          <FlatList
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            data={dataEvents}
            renderItem={renderItem}
          />
        </SafeAreaProvider>
      </Screen>
    </View>
  )
})
