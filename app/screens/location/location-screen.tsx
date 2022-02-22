import React from "react"
import { observer } from "mobx-react-lite"
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ImageStyle,
  Platform,
  ScrollView,
  Share,
  StatusBar,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { Button, HomeCard, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import ClockIcon from "../../../assets/svgs/clock-icon"
import PhoneIcon from "../../../assets/svgs/phone-icon"
import * as Linking from "expo-linking"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"
import HeartIcon from "../../../assets/svgs/heart-icon"
import ChevronsLeftIcon from "../../../assets/svgs/chevrons-left-icon"
import ShareIcon from "../../../assets/svgs/share-icon"
import { LocationScreenApi } from "../../services/api/location-screen-api"

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
]

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const CONTAINER: ViewStyle = {
  paddingBottom: spacing[5],
}

const IMAGE_STYLE: ImageStyle = {
  resizeMode: "contain",
  height: Dimensions.get("window").width / 1,
}

const HEADER_RIGHT_STYLE: ViewStyle = {
  flexDirection: "row",
}

const HEADER_STYLE: ViewStyle = {
  marginTop: spacing[7],
  flexDirection: "row",
  justifyContent: "space-between",
  marginHorizontal: spacing[5],
}

const HEART_ICON: ViewStyle = {
  marginTop: spacing[1],
}

const SHARE_ICON: ViewStyle = {
  marginLeft: spacing[2],
}

const BACK_ICON: ViewStyle = {
  marginTop: spacing[2],
  marginLeft: spacing[3],
}

const BUTTON_HEADER_BASE_SYTLE: ViewStyle = {
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: 100,
  width: 40,
  height: 40,
}

const BUTTON_HEADER_STYLE_SHARE: ViewStyle = {
  ...BUTTON_HEADER_BASE_SYTLE,
}

const BUTTON_HEADER_STYLE_HEART: ViewStyle = {
  ...BUTTON_HEADER_BASE_SYTLE,
  marginLeft: spacing[2],
}

const INFORMATION_CONTAINER: ViewStyle = {
  flexDirection: "row",
}

const SUBHEADER_CONTAINER: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: spacing[2],
}
const ICON_STYLING: ViewStyle = {
  alignSelf: "center",
  marginRight: spacing[1],
}

const ICON_TEXT_STYLEING: TextStyle = {
  fontWeight: "500",
  lineHeight: 36,
  color: color.palette.lightGrey,
}

const DESCRIPTION_STYLE: TextStyle = {
  textAlign: "justify",
  lineHeight: 24,
  marginVertical: spacing[6],
}

const INFORMATION_HEADER: TextStyle = {
  lineHeight: 20,
  fontWeight: "bold",
}

const EVENT_LIST_HEADER: TextStyle = {
  ...INFORMATION_HEADER,
  marginHorizontal: spacing[5],
}

const INFORMATION_URL: TextStyle = {
  lineHeight: 20,
  color: color.primary,
}

const EVENTS_INFORMATION_CONTAINER: ViewStyle = {
  marginTop: spacing[5],
}

const EVENTS_CONTAINER: ViewStyle = {
  marginStart: spacing[5],
  paddingTop: spacing[5],
}
const FOOTER: ViewStyle = {
  justifyContent: "flex-end",
  marginBottom: spacing[6],
  borderTopColor: color.line,
  borderTopWidth: 1,
  paddingHorizontal: spacing[5],
  paddingTop: spacing[6],
}

export const LocationScreen = observer(function LocationScreen() {
  const [yPosition, setYPosition] = React.useState(0)
  const [events, setEvents] = React.useState([])

  // Pull in one of our MST stores
  const { navigationStore } = useStores()

  const { locationScreen, eventScreen } = navigationStore

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()

  const goBack = () => navigation.goBack()
  const goToEvent = () => navigation.navigate("event")

  const openWebsite = () => Linking.openURL(locationScreen.link)

  const handleScroll = (e) => {
    setYPosition(e.nativeEvent.contentOffset.y)
  }

  const openMap = () => {
    const scheme = Platform.OS === "ios" ? "maps:0,0?daddr=" : "http://maps.google.com/maps?daddr="

    const url = scheme + `${locationScreen.latitude}, ${locationScreen.longitude}`
    Linking.openURL(url)
  }

  const onShare = async () => {
    try {
      await Share.share({
        message: "CasaTaqafa",
        title: locationScreen.name,
        url: locationScreen.photoUri,
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const setEventScreen = async (event: typeof eventScreen) => {
    const eventSetup = await navigationStore.setEventScreen(event)
    if (eventSetup) {
      goToEvent()
    }
  }

  React.useEffect(() => {
    async function fetchEventsData() {
      const locationApi = new LocationScreenApi()
      const firestoreEvents = await locationApi.getEvents(locationScreen.id)
      setEvents(firestoreEvents.events)
    }

    if (Platform.OS === "android") {
      StatusBar.setTranslucent(true)
    }

    fetchEventsData()
  }, [])

  return (
    <View style={ROOT}>
      <StatusBar backgroundColor={yPosition <= 60 ? "transparent" : "white"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <ImageBackground
          source={{
            uri: locationScreen.photoUri,
          }}
          style={IMAGE_STYLE}
        >
          <View style={HEADER_STYLE}>
            <Button style={BUTTON_HEADER_BASE_SYTLE} onPress={goBack}>
              <ChevronsLeftIcon style={BACK_ICON} stroke={color.palette.black} />
            </Button>
            <View style={HEADER_RIGHT_STYLE}>
              <Button style={BUTTON_HEADER_STYLE_SHARE} onPress={onShare}>
                <ShareIcon style={SHARE_ICON} stroke={color.palette.black} />
              </Button>
              <Button style={BUTTON_HEADER_STYLE_HEART}>
                <HeartIcon style={HEART_ICON} stroke={color.palette.black} />
              </Button>
            </View>
          </View>
        </ImageBackground>

        <SafeAreaView>
          <View style={CONTAINER}>
            <View style={{ marginHorizontal: spacing[5] }}>
              <Text preset="header" text={locationScreen.name} />
              <View style={SUBHEADER_CONTAINER}>
                <View style={INFORMATION_CONTAINER}>
                  <ClockIcon size={16} stroke={color.palette.lightGrey} style={ICON_STYLING} />
                  <Text style={ICON_TEXT_STYLEING} text={locationScreen.openingHours} />
                </View>

                <View style={INFORMATION_CONTAINER}>
                  <PhoneIcon size={16} stroke={color.palette.lightGrey} style={ICON_STYLING} />
                  <Text style={ICON_TEXT_STYLEING} text={locationScreen.phoneNumber} />
                </View>
              </View>

              <Text
                style={DESCRIPTION_STYLE}
                text="A day after the Centers for Disease Control and Prevention urged Americans to stay home for Thanksgiving, more than one million people in the United States got on planes, marking the second day that more than a million people have flown since March. Nearly three million additional people have flown in the days since."
              />

              <Text style={INFORMATION_HEADER} text="Plus d’information" />
              <Button preset="link" onPress={openWebsite}>
                <Text style={INFORMATION_URL} text={locationScreen.link} />
              </Button>
            </View>
            <View style={EVENTS_INFORMATION_CONTAINER}>
              <Text style={EVENT_LIST_HEADER} text="Les événements qui appartient" />
              <View style={EVENTS_CONTAINER}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={events}
                  renderItem={({ item }) => (
                    <HomeCard onPress={() => setEventScreen(item)} key={item.id} item={item} />
                  )}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={FOOTER}>
        <Button text="Calculer l’itinéraire" onPress={openMap} />
      </View>
    </View>
  )
})
