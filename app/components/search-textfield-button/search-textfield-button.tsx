import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"

import { Text } from "../text/text"

import { Button } from "../button/button"
import { viewPresets, buttonPresets, iconPresets, textPresets } from "./search-textfield.preset"

import { SearchTextFieldButtonProps } from "./search-textfield.props"
import SearchIcon from "../../../assets/svgs/search-icon"

export const SearchTextfieldButton = observer(function SearchTextfieldButton(
  props: SearchTextFieldButtonProps,
) {
  const {
    text,
    preset = "primary",
    style: styleOverride,
    textStyle: textStyleOverride,
    buttonStyle: buttonStyleOverride,
    iconStyle: iconStyleOverride,
    ...rest
  } = props

  const viewStyle = viewPresets[preset] || viewPresets.primary
  const viewStyles = [viewStyle, styleOverride]

  const textStyle = textPresets[preset] || textPresets.primary
  const textStyles = [textStyle, textStyleOverride]

  const buttonStyle = buttonPresets[preset] || buttonPresets.primary
  const buttonStyles = [buttonStyle, buttonStyleOverride]

  const iconStyle = iconPresets[preset] || iconPresets.primary
  const iconStyles = [iconStyle, iconStyleOverride]

  return (
    <Button style={viewStyles} {...rest}>
      <View style={iconStyles}>
        <SearchIcon size={18} stroke={"#090A0A"} />
      </View>
      <View style={buttonStyles}>
        <Text style={textStyles} text={text} />
      </View>
    </Button>
  )
})
