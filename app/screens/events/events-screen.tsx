import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, FlatList } from "react-native"
import { Header, Screen, FilterModal, HomeCard } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"

import { color, spacing } from "../../theme"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"
import { EventsScreenApi } from "../../services/api/events-screen-api"
import I18n from "i18n-js"

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

const CARD_STYLE: ViewStyle = {
  marginBottom: 24,
  flex: 1,
  maxWidth: "50%",
}

export const EventsScreen = observer(function EventsScreen() {
  // Pull in one of our MST stores
  const { navigationStore } = useStores()

  const { eventScreen } = navigationStore
  // Pull in navigation via hook
  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()
  const goToEvent = () => navigation.navigate("event")
  const goBack = () => navigation.goBack()

  const [modalVisible, setModalVisible] = React.useState(false)
  const [filterState, setFilterState] = React.useState("All")
  const [events, setEvents] = React.useState([])
  const modalToggle = () => {
    setModalVisible(!modalVisible)
  }

  useEffect(() => {
    const lang = I18n.currentLocale()

    async function getEvents() {
      const eventsapi = new EventsScreenApi()
      const firestoreEvents = await eventsapi.getEvents(filterState, lang)
      setEvents([...events, ...firestoreEvents.events])
    }

    getEvents()
  }, [filterState])

  const updateFilter = (FilterValue) => {
    if (FilterValue !== filterState) {
      setEvents([])
      setFilterState(FilterValue)
    }
  }

  const setEventScreen = async (event: typeof eventScreen) => {
    const eventSetup = await navigationStore.setEventScreen(event)
    if (eventSetup) {
      goToEvent()
    }
  }

  return (
    <View style={FULL}>
      <Screen preset="fixed" style={ROOT}>
        <FilterModal
          onFilterValueChange={(val) => updateFilter(val)}
          canceller={modalToggle}
          toggler={modalVisible}
        />
        <Header
          leftIcon="back"
          rightIcon="filter"
          headerText="Les événements"
          onLeftPress={goBack}
          onRightPress={modalToggle}
        />
        <SafeAreaProvider style={FLATLIST_WRAPPER}>
          <FlatList
            columnWrapperStyle={WRAPPER_STYLE}
            numColumns={2}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            data={events}
            renderItem={({ item }) => (
              <HomeCard
                desc={false}
                onPress={() => setEventScreen(item)}
                style={CARD_STYLE}
                key={item.id}
                item={item}
              />
            )}
          />
        </SafeAreaProvider>
      </Screen>
    </View>
  )
})
