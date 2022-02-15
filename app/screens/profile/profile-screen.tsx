import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, Image, ImageStyle, TextStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import ChevronsRightIcon from "../../../assets/svgs/chevrons-right-icon"
import { getAuth } from "firebase/auth"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  marginHorizontal: spacing[5],
  justifyContent: "space-between",
  flex: 1,
}

const PROFILE_HEADER: ViewStyle = {
  flexDirection: "row",
  marginTop: spacing[5],
}

const PROFILE_INFORMATION_CONTAINER: ViewStyle = {
  justifyContent: "center",
  marginLeft: spacing[4],
}

const HEADER_IMAGE: ImageStyle = {
  width: 64,
  height: 64,
  borderRadius: 100,
  alignSelf: "center",
}

const ICON_STYLING: ViewStyle = {
  marginTop: spacing[2],
}

const USER_NAME: TextStyle = { lineHeight: 32, fontSize: 24, fontWeight: "bold" }

const USER_EMAIL: TextStyle = { lineHeight: 24 }

const PREFERENCES_COTNAINER: ViewStyle = { marginTop: spacing[5] }

const PREFERENCES_HEADER: TextStyle = { fontWeight: "bold", fontSize: 18, lineHeight: 24 }

const PREFERENCES_SUB_CONTAINER: ViewStyle = {
  marginTop: spacing[4],
  flexDirection: "row",
  justifyContent: "space-between",
}

const PREFERENCES_OPTION_TEXT_STYLE: TextStyle = { lineHeight: 20 }

const LOGOUT_CONTAINER: ViewStyle = { justifyContent: "flex-end", marginBottom: spacing[6] }

export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  const { userStore } = useStores()
  const { user } = userStore

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const logout = () => {
    const auth = getAuth()
    auth.signOut()
    userStore.logout()
  }
  return (
    <Screen style={ROOT} preset="scroll">
      <View>
        <View style={PROFILE_HEADER}>
          <View>
            <Image style={HEADER_IMAGE} source={{ uri: user.profilePicture }} />
          </View>
          <View style={PROFILE_INFORMATION_CONTAINER}>
            <Text style={USER_NAME} text={user.name} />
            <Text style={USER_EMAIL} text={user.email} />
          </View>
        </View>
        <View style={PREFERENCES_COTNAINER}>
          <Text style={PREFERENCES_HEADER} text="International Preferences" />
          <View style={PREFERENCES_SUB_CONTAINER}>
            <Text style={PREFERENCES_OPTION_TEXT_STYLE} text="Language" />
            <ChevronsRightIcon size={14} style={ICON_STYLING} stroke="#090A0A" />
          </View>

          <View style={PREFERENCES_COTNAINER}>
            <Text style={PREFERENCES_HEADER} text="More" />

            <View style={PREFERENCES_SUB_CONTAINER}>
              <Text style={PREFERENCES_OPTION_TEXT_STYLE} text="Rate & review" />
              <ChevronsRightIcon size={14} style={ICON_STYLING} stroke="#090A0A" />
            </View>
          </View>
        </View>
      </View>
      <View style={LOGOUT_CONTAINER}>
        <Button text="Logout" onPress={logout} />
      </View>
    </Screen>
  )
})
