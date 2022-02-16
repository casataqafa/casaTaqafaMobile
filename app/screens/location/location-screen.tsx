import React from "react"
import { observer } from "mobx-react-lite"
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ImageStyle,
  Platform,
  ScrollView,
  StatusBar,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { Button, Header, HomeCard, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import ClockIcon from "../../../assets/svgs/clock-icon"
import PhoneIcon from "../../../assets/svgs/phone-icon"
import * as Linking from "expo-linking"
import { StackNavigationProp } from "@react-navigation/stack"
import { AuthenticatedNavigatorParamList } from "../../navigators/authenticated-navigator"

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

const HEADER_STYLE: ViewStyle = {
  marginHorizontal: spacing[5],
}

const HEADER: ViewStyle = {
  marginTop: spacing[6],
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
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<AuthenticatedNavigatorParamList>>()

  const goBack = () => navigation.goBack()

  const openWebsite = () => Linking.openURL("https://wecasablanca.ma")

  const handleScroll = (e) => {
    setYPosition(e.nativeEvent.contentOffset.y)
  }

  const openMap = () => {
    const scheme =
      Platform.OS === "ios"
        ? "http://maps.apple.com/maps?daddr="
        : "http://maps.google.com/maps?daddr="

    const url = scheme + `33.58175437449857, -7.634435606672016`
    Linking.openURL(url)
  }

  return (
    <View style={ROOT}>
      <StatusBar backgroundColor={yPosition <= 60 ? "transparent" : "white"} translucent={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <ImageBackground
          source={{
            uri: "https://cdn.archilovers.com/projects/9ce337e9-daae-424b-9aa4-6f798f1bd9b1.jpg",
          }}
          style={IMAGE_STYLE}
        >
          <View style={HEADER_STYLE}>
            <Header style={HEADER} leftIcon="back" onLeftPress={goBack} />
          </View>
        </ImageBackground>

        <SafeAreaView>
          <View style={CONTAINER}>
            <View style={{ marginHorizontal: spacing[5] }}>
              <Text preset="header" text="Thêatre casablanca" />
              <View style={SUBHEADER_CONTAINER}>
                <View style={INFORMATION_CONTAINER}>
                  <ClockIcon size={16} stroke={color.palette.lightGrey} style={ICON_STYLING} />
                  <Text style={ICON_TEXT_STYLEING} text="8:00 - 18:00" />
                </View>

                <View style={INFORMATION_CONTAINER}>
                  <PhoneIcon size={16} stroke={color.palette.lightGrey} style={ICON_STYLING} />
                  <Text style={ICON_TEXT_STYLEING} text="0522917622" />
                </View>
              </View>

              <Text
                style={DESCRIPTION_STYLE}
                text="A day after the Centers for Disease Control and Prevention urged Americans to stay home for Thanksgiving, more than one million people in the United States got on planes, marking the second day that more than a million people have flown since March. Nearly three million additional people have flown in the days since."
              />

              <Text style={INFORMATION_HEADER} text="Plus d’information" />
              <Button preset="link" onPress={openWebsite}>
                <Text style={INFORMATION_URL} text="https://wecasablanca.ma" />
              </Button>
            </View>
            <View style={EVENTS_INFORMATION_CONTAINER}>
              <Text style={EVENT_LIST_HEADER} text="Les événements qui appartient" />
              <View style={EVENTS_CONTAINER}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={dataEvents}
                  renderItem={({ item }) => <HomeCard key={item.id} item={item} />}
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
