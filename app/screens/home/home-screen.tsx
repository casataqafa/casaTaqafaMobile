import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, FlatList, Image, TextStyle, ImageStyle } from "react-native"
import { Screen, Text, HomeCard } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color, spacing } from "../../theme"

import ChevronsRightIcon from "../../../assets/svgs/chevrons-right-icon"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"
import { TouchableOpacity } from "react-native-gesture-handler"
import { InterestCard } from "../../components/interest-card/interest-card"
import { HomeApi } from "../../services/api/home-api"
import { EventModel } from "../../models/event/event"
import { LocationScreen } from ".."

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

export const HomeScreen = observer(function HomeScreen() {
  // Pull in one of our MST stores
  const { userStore, interestsStore, navigationStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()
  const goToEvents = () => navigation.navigate("place")
  const goToEvent = () => navigation.navigate("event")
  const goToLocation = () => navigation.navigate("place")

  const { user } = userStore
  const { interests } = interestsStore
  const { eventScreen, locationScreen } = navigationStore

  const [places, setPLaces] = React.useState([])
  const [events, setEvents] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      await interestsStore.getInterests()
    }

    async function fetchLocationData() {
      const homeapi = new HomeApi()
      const firestorePlaces = await homeapi.getLocations()
      setPLaces(firestorePlaces.places)
    }

    async function fetchEventsData() {
      const homeapi = new HomeApi()
      const firestoreEvents = await homeapi.getEvents()
      setEvents(firestoreEvents.events)
    }

    fetchEventsData()
    fetchLocationData()
    fetchData()
  }, [])

  const setEventScreen = async (event: typeof eventScreen) => {
    const eventSetup = await navigationStore.setEventScreen(event)
    if (eventSetup) {
      goToEvent()
    }
  }

  const setLocationScreen = async (location: typeof locationScreen) => {
    const locationSetup = await navigationStore.setLocationScreen(location)
    if (locationSetup) {
      goToLocation()
    }
  }

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
            data={events}
            renderItem={({ item }) => (
              <HomeCard onPress={() => setEventScreen(item)} key={item.id} item={item} />
            )}
          />
        </View>

        <View style={RECOMENDED_SPACER}>
          <Text style={TEXT_HEADER} text="Recommandé pour vous" />
        </View>

        <View style={SECTION_SPACE}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={places}
            renderItem={({ item }) => (
              <HomeCard onPress={() => setLocationScreen(item)} key={item.id} item={item} />
            )}
          />
        </View>
      </Screen>
    </View>
  )
})
