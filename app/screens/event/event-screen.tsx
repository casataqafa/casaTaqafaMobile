import React from "react"
import { observer } from "mobx-react-lite"
import { ImageBackground, View, ViewStyle, Image } from "react-native"
import { Button, Header, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const EventScreen = observer(function EventScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <SafeAreaProvider style={ROOT}>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri:
              "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          }}
          style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, flex: 1 }}
        />

        <View style={{ marginHorizontal: spacing[5] }}>
          <Header leftIcon="back" rightIcon="share" />
        </View>
      </SafeAreaView>
      <Button
        style={{ borderRadius: 100, alignContent: "center", width: 48, bottom: 20, left: "80%" }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Text>FEFLJK</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
})
