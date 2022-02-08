/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import GoogleIcon from "../../../assets/svgs/social/google-icon"
import { Button } from ".."

import * as Google from "expo-auth-session/providers/google"
import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth"

import { useStores } from "../../models"
import { User } from "../../models/user/user"

const btnClickContain: ViewStyle = {
  borderRadius: 48,
  backgroundColor: "#ffffff",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#e3e5e5",

  paddingHorizontal: spacing[4],
  marginBottom: spacing[4],
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
  color: color.palette.black,

  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 16,
  letterSpacing: 0,
  textAlign: "center",
}

export interface GoogleButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */

export const GoogleButton = observer(function GoogleButton(props: GoogleButtonProps) {
  // Pull in one of our MST stores
  const { userStore } = useStores()

  const { style } = props
  const styles = flatten([btnClickContain, style])

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId: "989341446856-6ba70t0h29k1rpiurbboqmq09dfrs1fh.apps.googleusercontent.com",
    androidClientId: "989341446856-db57dcaoc3pfqnbar7h3u24sctg3k144.apps.googleusercontent.com",
    iosClientId: "989341446856-1pv7s04gajqovvlunkq0kt8lrkm3tfbk.apps.googleusercontent.com",
  })

  const handleUserAuth = async (user) => {
    const userExists = await userStore.doesUserExists(user)
    const usr: User = { ...user, hasInterests: userExists !== false }

    userStore.setUser(usr)
  }

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params
      const auth = getAuth()
      // eslint-disable-next-line new-cap
      const credentials = GoogleAuthProvider.credential(id_token)

      signInWithCredential(auth, credentials).then(() => {
        const user = {
          uid: auth.currentUser.uid,
          name: auth.currentUser.displayName,
          email: auth.currentUser.email,
          profilePicture: auth.currentUser.photoURL,
          hasInterests: false,
          isFirstTime: false,
        }

        handleUserAuth(user)
        // userStore.doesUserExists(user)
        // userStore.setUser(user)
      })
    }
  }, [response])

  return (
    <Button
      disabled={!request}
      style={styles}
      onPress={() => {
        promptAsync()
      }}
    >
      <View style={iconWrapper}>
        <GoogleIcon />
      </View>
      <View style={btnContainer}>
        <Text style={TEXT}>Continue with google</Text>
      </View>
    </Button>
  )
})
