import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image, FlatList, TextStyle, ImageStyle } from "react-native"
import { Text, Card, Header, Screen } from "../../components"
import { goBack } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"

import { color, spacing } from "../../theme"
import { SafeAreaProvider } from "react-native-safe-area-context"

const ROOT: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[5],
  flex: 1,
}
const FULL: ViewStyle = { backgroundColor: color.transparent, flex: 1 }

const FLATLIST_WRAPPER: ViewStyle = {}

const WRAPPER_STYLE: ViewStyle = {
  marginRight: -28,
}

const TEXT_TITLE: TextStyle = {
  fontWeight: "bold",
  color: color.palette.black,
  marginBottom: spacing[2],
  lineHeight: 16,
  textAlign: "left",
}

const TEXT_SUBTITLE: TextStyle = {
  fontWeight: "normal",
  marginBottom: spacing[2],
  color: color.palette.lightGrey,

  fontSize: 12,
  lineHeight: 16,
  textAlign: "left",
}

const IMG_STYLE: ImageStyle = {
  borderRadius: 16,

  aspectRatio: 1,
  marginBottom: spacing[3],
}

const CARD_STYLE: ViewStyle = {
  marginBottom: 24,
  flex: 1,
  maxWidth: "50%",
}
const dataEvents = [
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
  {
    id: "5",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "6",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "7",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "8",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "9",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
]

const renderItem = ({ item }) => (
  <Card style={CARD_STYLE} preset="HomeCard">
    <Image
      style={IMG_STYLE}
      source={{
        uri: item.uri,
      }}
    />

    <View>
      <Text style={TEXT_TITLE} text={item.name} />

      <Text style={TEXT_SUBTITLE} numberOfLines={2} text={item.subtitle} />
    </View>
  </Card>
)

export const EventsScreen = observer(function EventsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={FULL}>
      <Screen preset="fixed" style={ROOT}>
        <Header
          leftIcon="back"
          rightIcon="filter"
          headerText="Les événements"
          onLeftPress={goBack}
        />
        <SafeAreaProvider style={FLATLIST_WRAPPER}>
          <FlatList
            columnWrapperStyle={WRAPPER_STYLE}
            numColumns={2}
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
