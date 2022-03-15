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
import I18n from "i18n-js"

const ROOT: ViewStyle = {
  // marginHorizontal: spacing[5],
  // paddingHorizontal: spacing[5],
}
const FULL: ViewStyle = { backgroundColor: color.transparent, flex: 1 }

const TEXT_HEADER: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
  color: color.palette.black,
}

const WELCOME_TEXT_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "row",
}
const WELCOME_TEXT_GREY: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
  color: "#646464",
  alignSelf: "center",
}
const WELCOME_TEXT_PRIMARY: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
  color: color.primary,
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
  const goToEvents = () => navigation.navigate("events")
  const goToEvent = () => navigation.navigate("event")
  const goToLocation = () => navigation.navigate("place")
  const goToMap = () => navigation.navigate("map")

  const { user } = userStore
  const { interests } = interestsStore
  const { eventScreen, locationScreen } = navigationStore

  const [places, setPLaces] = React.useState([])
  const [events, setEvents] = React.useState([])

  React.useEffect(() => {
    const lang = I18n.currentLocale()

    async function fetchData() {
      await interestsStore.getInterests()
    }

    async function fetchLocationData() {
      const homeapi = new HomeApi()

      const firestorePlaces = await homeapi.getLocations(lang)
      setPLaces(firestorePlaces.places)
    }

    async function fetchEventsData() {
      const homeapi = new HomeApi()
      const firestoreEvents = await homeapi.getEvents(lang)
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

  const setMapScreen = async (filterCategory) => {
    console.tron.log(filterCategory)
    const mapSetup = await navigationStore.setMapScreen(filterCategory)
    if (mapSetup) {
      goToMap()
    }
  }

  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <View style={WELCOME_SPACER}>
          <View style={WELCOME_TEXT_CONTAINER}>
            <Text style={WELCOME_TEXT_GREY} text="Casa" />
            <Text style={WELCOME_TEXT_PRIMARY} text="taqafa" />
          </View>
          <Image style={HEADER_IMAGE} source={{ uri: user.profilePicture }} />
        </View>

        <View style={RECOMENDED_SPACER}>
          <Text style={TEXT_HEADER} text="Trouver un lieu" />
        </View>
        <View style={SECTION_SPACE}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[...interests]}
            renderItem={({ item }) => (
              <InterestCard
                onPress={() => setMapScreen(item.name)}
                key={item.id}
                name={item.name}
                uri={item.uri}
              />
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
              <HomeCard
                onPress={() => setEventScreen(item)}
                key={item.id}
                item={item}
                desc={false}
              />
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
