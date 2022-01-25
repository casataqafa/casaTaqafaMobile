import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing } from "../../theme"
import { Text } from "../"
import { flatten } from "ramda"

const DEVIDERSECTION: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

const DEVIDER: ViewStyle = {
  flex: 1,
  alignSelf: "center",
  width: "100%",

  borderBottomColor: color.line,
  borderBottomWidth: 1,
}

const tt: TextStyle = {
  marginHorizontal: spacing[4],
  color: color.primary,
  fontSize: 16,
  fontWeight: "500",
}

export interface DeviderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Devider for login and register
 */
export const Devider = observer(function Devider(props: DeviderProps) {
  const { style } = props
  const styles = flatten([DEVIDERSECTION, style])

  return (
    <View style={styles}>
      <View style={DEVIDER} />
      <Text style={tt} text="Or" />
      <View style={DEVIDER} />
    </View>
  )
})
