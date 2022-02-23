/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import FacebookIcon from "../../../assets/svgs/social/facebook-icon"
import { Button } from ".."
import * as Facebook from "expo-auth-session/providers/facebook"
import { ResponseType } from "expo-auth-session"
import { getAuth, FacebookAuthProvider, signInWithCredential } from "firebase/auth"
import { useStores } from "../../models"
import { User } from "../../models/user/user"

const btnClickContain: ViewStyle = {
  borderRadius: 48,
  backgroundColor: "#0078ff",

  paddingHorizontal: spacing[4],
  padding: spacing[4],

  flexDirection: "row",
}

const iconWrapper: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
}

const btnContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: color.palette.white,

  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 16,
  letterSpacing: 0,
  textAlign: "center",
}

export interface FacebookButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const FacebookButton = observer(function FacebookButton(props: FacebookButtonProps) {
  // Pull in one of our MST stores
  const { userStore } = useStores()

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    expoClientId: "1089825131560672",
  })

  const handleUserAuth = async (user) => {
    const userExists = await userStore.doesUserExists(user)
    const usr: User = { ...user, hasInterests: userExists !== false }

    userStore.setUser(usr)
  }

  React.useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params

      const auth = getAuth()

      const credential = FacebookAuthProvider.credential(access_token)

      // Sign in with the credential from the Facebook user.
      signInWithCredential(auth, credential).then(() => {
        const user = {
          uid: auth.currentUser.uid,
          name: auth.currentUser.displayName,
          email: "email@email.com",
          profilePicture: auth.currentUser.photoURL,
          hasInterests: false,
          isFirstTime: false,
        }

        handleUserAuth(user)
      })
    }
  }, [response])

  const { style } = props
  const styles = flatten([btnClickContain, style])

  return (
    <Button
      disabled={!request}
      style={styles}
      onPress={() => {
        promptAsync()
      }}
    >
      <View style={iconWrapper}>
        <FacebookIcon />
      </View>
      <View style={btnContainer}>
        <Text style={TEXT}>Continue with facebook</Text>
      </View>
    </Button>
  )
})
