import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography, spacing } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import FacebookIcon from "../../../assets/svgs/social/facebook-icon"

const btnClickContain: ViewStyle = {
  width: 327,
  height: 48,
  borderRadius: 48,
  backgroundColor: "#0078ff",

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
  color: color.palette.white,

  width: 186,
  height: 16,

  fontWeight: "400",
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
export const FacebookButton = observer(function GoogleButton(props: GoogleButtonProps) {
  const { style } = props
  const styles = flatten([btnClickContain, style])

  return (
    // <View style={styles}>
    <TouchableOpacity style={styles}>
      <View style={iconWrapper}>
        <FacebookIcon />
      </View>
      <View style={btnContainer}>
        <Text style={TEXT}>Continue with facebook</Text>
      </View>
    </TouchableOpacity>
    // </View>
  )
})
