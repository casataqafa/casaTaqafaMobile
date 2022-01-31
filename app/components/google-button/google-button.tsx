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

import jwt_decode from "jwt-decode"

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
  const { style } = props
  const styles = flatten([btnClickContain, style])

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    // clientId: "840194792446-1rn8gcgpn513ekuacffgd2huco0hq276.apps.googleusercontent.com",
    clientId: "989341446856-6ba70t0h29k1rpiurbboqmq09dfrs1fh.apps.googleusercontent.com",
  })

  React.useEffect(() => {
    console.tron.log(response)
    if (response?.type === "success") {
      const { id_token } = response.params
      const auth = getAuth()
      // eslint-disable-next-line new-cap
      const credentials = GoogleAuthProvider.credential(id_token)

      const user = jwt_decode(id_token)

      console.tron.log("The User", user)

      signInWithCredential(auth, credentials)
    }
  }, [response])

  return (
    <Button
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
