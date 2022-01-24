/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import GoogleIcon from "../../../assets/svgs/social/google-icon"
import { Button } from ".."

const btnClickContain: ViewStyle = {
  width: 327,
  height: 48,
  borderRadius: 48,
  backgroundColor: "#ffffff",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#e3e5e5",

  paddingHorizontal: 16,
  padding: 16,

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

  width: 166,
  height: 16,

  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 16,
  letterSpacing: 0,
  textAlign: "center",
}

export interface GoogleButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
}

/**
 * Describe your component here
 */
export const GoogleButton = observer(function GoogleButton(props: GoogleButtonProps) {
  const styles = flatten([btnClickContain])

  return (
    <Button style={styles}>
      <View style={iconWrapper}>
        <GoogleIcon />
      </View>
      <View style={btnContainer}>
        <Text style={TEXT}>Continue with google</Text>
      </View>
    </Button>
  )
})
