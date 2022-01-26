/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import GoogleIcon from "../../../assets/svgs/social/google-icon"
import { Button } from ".."

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
