import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"

import { Text } from "../text/text"

import { Button } from "../button/button"
import { ChipsProps } from "./chips.props"
import { viewPresets, buttonPresets, iconPresets, textPresets } from "./chips.presets"

export const Chips = observer(function Chips(props: ChipsProps) {
  const {
    leftIcon,
    onPress,
    text,
    preset = "primary",
    style: styleOverride,
    textStyle: textStyleOverride,
    buttonStyle: buttonStyleOverride,
    iconStyle: iconStyleOverride,
  } = props
  //const styles = flatten([btnClickContain, style])

  const viewStyle = viewPresets[preset] || viewPresets.primary
  const viewStyles = [viewStyle, styleOverride]

  const textStyle = textPresets[preset] || textPresets.primary
  const textStyles = [textStyle, textStyleOverride]

  const buttonStyle = buttonPresets[preset] || buttonPresets.primary
  const buttonStyles = [buttonStyle, buttonStyleOverride]

  const iconStyle = iconPresets[preset] || iconPresets.primary
  const iconStyles = [iconStyle, iconStyleOverride]

  return (
    <Button style={viewStyles}>
      <View style={iconStyles}>{leftIcon}</View>
      <View style={buttonStyles}>
        <Text style={textStyles} text={text} />
      </View>
    </Button>
  )
})
