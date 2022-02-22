import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image, FlatList, TextStyle, ImageStyle } from "react-native"
import { Text, Card, Header, Screen, FilterModal, HomeCard } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"

import { color, spacing } from "../../theme"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"

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
  {
    id: "10",
    name: "Cinema",
    subtitle: "CASAMOUJA est une opération street art",
    uri: "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
  },
]

export const EventsScreen = observer(function EventsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()

  const goBack = () => navigation.goBack()

  const [modalVisible, setModalVisible] = React.useState(false)
  const [filterState, setFilterState] = React.useState("All")
  const modalToggle = () => {
    setModalVisible(!modalVisible)
  }

  useEffect(() => {
    console.tron.log("fdfd", filterState)
  }, [filterState])

  return (
    <View style={FULL}>
      <Screen preset="fixed" style={ROOT}>
        <FilterModal
          onFilterValueChange={(val) => setFilterState(val)}
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
            data={dataEvents}
            renderItem={({ item }) => <HomeCard style={CARD_STYLE} key={item.id} item={item} />}
          />
        </SafeAreaProvider>
      </Screen>
    </View>
  )
})
