import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, FlatList, TextStyle } from "react-native"
import { Screen, Text, Header, EventProgramCard } from "../../components"
import { goBack } from "../../navigators"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { color, spacing } from "../../theme"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"

const ROOT: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[5],
  flex: 1,
}
const FULL: ViewStyle = { backgroundColor: color.transparent, flex: 1 }

const FLATLIST_WRAPPER: ViewStyle = { marginTop: spacing[5], flexGrow: 1 }

const TEXT_HEADER: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
  color: color.palette.black,
}

export const EventProgramScreen = observer(function EventProgramScreen() {
  // Pull in one of our MST stores
  const { navigationStore } = useStores()
  const { eventScreen } = navigationStore

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()
  const goToArtist = () => navigation.navigate("artist")

  const setEventScreen = async (artist) => {
    const artistSetup = await navigationStore.setArtistScreen(artist)
    if (artistSetup) {
      goToArtist()
    }
  }

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
            data={eventScreen.eventDetails}
            renderItem={({ item, index }) => (
              <EventProgramCard onPress={() => setEventScreen(item)} key={index} item={item} />
            )}
          />
        </SafeAreaProvider>
      </Screen>
    </View>
  )
})
