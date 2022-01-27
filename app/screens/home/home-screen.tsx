import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, FlatList, Image, TextStyle } from "react-native"
import { Screen, Text, Card } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"

import ChevronsRightIcon from "../../../assets/svgs/chevrons-right-icon"

const ROOT: ViewStyle = {
  padding: 24,
}
const FULL: ViewStyle = { backgroundColor: color.transparent, flex: 1 }

const data = [
  {
    id: "1",
    name: "Cinema",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "2",
    name: "Cinema",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "3",
    name: "Cinema",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
  {
    id: "4",
    name: "Cinema",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
]

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
]

const dataRecommendation = [
  {
    id: "1",
    name: "Good Vibes",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
    subtitle: "Tame Impala, Joji, Tyler, The Creator, 5 Second",
  },
  {
    id: "2",
    name: "Mega Hit Mix",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
    subtitle: "Tame Impala, Joji, Tyler, The Creator, 5 Second",
  },
  {
    id: "3",
    name: "Young & Free",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
    subtitle: "Tame Impala, Joji, Tyler, The Creator, 5 Second",
  },
  {
    id: "4",
    name: "Young & Free",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
    subtitle: "Tame Impala, Joji, Tyler, The Creator, 5 Second",
  },
]

const TEXT_HEADER: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
  color: color.palette.black,
}

const SECTION_SPACE: ViewStyle = {
  marginTop: spacing[5],
}

const cardPlaces = ({ item }) => (
  <Card preset="HomeCard">
    <Image
      style={{
        width: 88,
        height: 88,
        borderRadius: 16,
        aspectRatio: 1,
        marginBottom: spacing[3],
      }}
      source={{
        uri: item.uri,
      }}
    />

    <View>
      <Text
        style={{
          fontWeight: "bold",
          color: color.palette.black,
          marginBottom: spacing[2],
          lineHeight: 16,
          textAlign: "left",
          letterSpacing: 0,
        }}
      >
        {item.name}
      </Text>
    </View>
  </Card>
)

const cardEvents = ({ item }) => (
  <Card preset="HomeCard">
    <Image
      style={{
        width: 141,
        height: 141,
        borderRadius: 16,
        aspectRatio: 1,
        marginBottom: spacing[3],
      }}
      source={{
        uri: item.uri,
      }}
    />

    <View>
      <Text
        style={{
          fontWeight: "bold",
          color: color.palette.black,
          marginBottom: spacing[2],
          lineHeight: 16,
          textAlign: "left",
          letterSpacing: 0,
        }}
      >
        {item.name}
      </Text>

      <Text
        style={{
          fontWeight: "normal",
          marginBottom: spacing[2],
          color: color.palette.lightGrey,

          fontSize: 12,
          lineHeight: 16,
          textAlign: "left",
          letterSpacing: 0,
        }}
        numberOfLines={2}
      >
        {item.subtitle}
      </Text>
    </View>
  </Card>
)

const cardRecommendation = ({ item }) => (
  <Card preset="HomeCard">
    <Image
      style={{
        width: 141,
        height: 141,
        borderRadius: 16,
        aspectRatio: 1,
        marginBottom: spacing[3],
      }}
      source={{
        uri: item.uri,
      }}
    />

    <View>
      <Text
        style={{
          fontWeight: "bold",
          color: color.palette.black,
          marginBottom: spacing[2],
          lineHeight: 16,
          textAlign: "left",
          letterSpacing: 0,
        }}
      >
        {item.name}
      </Text>

      <Text
        style={{
          fontWeight: "normal",
          marginBottom: spacing[2],
          color: color.palette.lightGrey,

          fontSize: 12,
          lineHeight: 16,
          textAlign: "left",
          letterSpacing: 0,
        }}
        numberOfLines={2}
      >
        {item.subtitle}
      </Text>
    </View>
  </Card>
)

const ICON_STYLING: ViewStyle = {
  marginTop: spacing[2],
}

const EVENT_SPACER: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 32,
}

const WELCOME_SPACER: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}
export const HomeScreen = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <View style={WELCOME_SPACER}>
          <Text style={TEXT_HEADER}>Bienvenue</Text>
          <Text style={TEXT_HEADER}>Avatar</Text>
        </View>

        <View style={SECTION_SPACE}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={cardPlaces}
          />
        </View>

        <View style={EVENT_SPACER}>
          <Text style={TEXT_HEADER}>Les événements</Text>

          <ChevronsRightIcon size={14} style={ICON_STYLING} stroke="#090A0A" />
        </View>
        <View style={SECTION_SPACE}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={dataEvents}
            renderItem={cardEvents}
          />
        </View>

        <View style={SECTION_SPACE}>
          <Text style={TEXT_HEADER}>Recommandé pour vous</Text>
        </View>

        <View style={SECTION_SPACE}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={dataRecommendation}
            renderItem={cardRecommendation}
          />
        </View>
      </Screen>
    </View>
  )
})
