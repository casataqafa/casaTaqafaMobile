import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, FlatList, Image, TextStyle, ImageStyle } from "react-native"
import { Screen, Text, Card, HomeCard } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color, spacing } from "../../theme"

import ChevronsRightIcon from "../../../assets/svgs/chevrons-right-icon"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"
import { TouchableOpacity } from "react-native-gesture-handler"
import { InterestCard } from "../../components/interest-card/interest-card"

const ROOT: ViewStyle = {
  // marginHorizontal: spacing[5],
  // paddingHorizontal: spacing[5],
}
const FULL: ViewStyle = { backgroundColor: color.transparent, flex: 1 }

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

const WELCOME_TEXT: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
  color: color.palette.black,
  alignSelf: "center",
}

const SECTION_SPACE: ViewStyle = {
  marginTop: spacing[5],
  marginStart: spacing[5],
}

const ICON_STYLING: ViewStyle = {
  marginTop: spacing[2],
}

const EVENT_SPACER: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: spacing[6],
  marginHorizontal: spacing[5],
}

const RECOMENDED_SPACER: ViewStyle = {
  marginTop: spacing[5],
  marginHorizontal: spacing[5],
}

const WELCOME_SPACER: ViewStyle = {
  marginHorizontal: spacing[5],
  marginTop: spacing[4],
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
}

const HEADER_IMAGE: ImageStyle = {
  width: 40,
  height: 40,
  borderRadius: 100,
  alignSelf: "center",
}

const CARD_EVENTS_IMAGE: ImageStyle = {
  width: 141,
  height: 141,
  borderRadius: 16,
  aspectRatio: 1,
  marginBottom: spacing[3],
}

const CARD_EVENTS_HEADER_TEXT: TextStyle = {
  fontWeight: "bold",
  color: color.palette.black,
  marginBottom: spacing[2],
  lineHeight: 16,
  textAlign: "left",
  letterSpacing: 0,
}

const CARD_EVENTS_SUB_HEADER_TEXT: TextStyle = {
  fontWeight: "normal",
  marginBottom: spacing[2],
  color: color.palette.lightGrey,

  fontSize: 12,
  lineHeight: 16,
  textAlign: "left",
  letterSpacing: 0,
}

const CARD_RECOMMENDATION_IMAGE: ImageStyle = {
  width: 141,
  height: 141,
  borderRadius: 16,
  aspectRatio: 1,
  marginBottom: spacing[3],
}

const CARD_RECOMMENDATION_HEADER_TEXT: TextStyle = {
  fontWeight: "bold",
  color: color.palette.black,
  marginBottom: spacing[2],
  lineHeight: 16,
  textAlign: "left",
  letterSpacing: 0,
}

const CARD_RECOMMENDATION_SUB_HEADER_TEXT: TextStyle = {
  fontWeight: "normal",
  marginBottom: spacing[2],
  color: color.palette.lightGrey,

  fontSize: 12,
  lineHeight: 16,
  textAlign: "left",
  letterSpacing: 0,
}

const cardEvents = ({ item }) => (
  <Card preset="HomeCard">
    <Image
      style={CARD_EVENTS_IMAGE}
      source={{
        uri: item.uri,
      }}
    />

    <View>
      <Text style={CARD_EVENTS_HEADER_TEXT}>{item.name}</Text>

      <Text style={CARD_EVENTS_SUB_HEADER_TEXT} numberOfLines={2}>
        {item.subtitle}
      </Text>
    </View>
  </Card>
)

const cardRecommendation = ({ item }) => (
  <Card preset="HomeCard">
    <Image
      style={CARD_RECOMMENDATION_IMAGE}
      source={{
        uri: item.uri,
      }}
    />

    <View>
      <Text style={CARD_RECOMMENDATION_HEADER_TEXT}>{item.name}</Text>

      <Text style={CARD_RECOMMENDATION_SUB_HEADER_TEXT} numberOfLines={2}>
        {item.subtitle}
      </Text>
    </View>
  </Card>
)

export const HomeScreen = observer(function HomeScreen() {
  // Pull in one of our MST stores
  const { userStore, interestsStore } = useStores()
  const { user } = userStore

  const { interests } = interestsStore

  React.useEffect(() => {
    async function fetchData() {
      await interestsStore.getInterests()
    }

    fetchData()
  }, [])

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()
  const goToEvents = () => navigation.navigate("artist")
  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <View style={WELCOME_SPACER}>
          <Text style={WELCOME_TEXT} text="Bienvenue" />
          <Image style={HEADER_IMAGE} source={{ uri: user.profilePicture }} />
        </View>

        <View style={SECTION_SPACE}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[...interests]}
            renderItem={({ item }) => (
              <InterestCard key={item.id} name={item.name} uri={item.uri} />
            )}
          />
        </View>

        <TouchableOpacity onPress={goToEvents}>
          <View style={EVENT_SPACER}>
            <Text style={TEXT_HEADER} text="Les événements" />

            <ChevronsRightIcon size={14} style={ICON_STYLING} stroke="#090A0A" />
          </View>
        </TouchableOpacity>
        <View style={SECTION_SPACE}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={dataEvents}
            renderItem={({ index, item }) => <HomeCard key={item.id} item={item} />}
          />
        </View>

        <View style={RECOMENDED_SPACER}>
          <Text style={TEXT_HEADER} text="Recommandé pour vous" />
        </View>

        <View style={SECTION_SPACE}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={dataRecommendation}
            renderItem={({ index, item }) => <HomeCard key={item.id} item={item} />}
          />
        </View>
      </Screen>
    </View>
  )
})
