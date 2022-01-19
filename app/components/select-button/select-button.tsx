import * as React from "react"
import { observer } from "mobx-react-lite"
import { SelectButtonProps } from "./select-button.props"
import { Button } from ".."
import { viewPresets, textPresets } from "./select-button.presets"

/**
 * A button that can be selected and unselected
 */
export const SelectButton = observer(function SelectButton(props: SelectButtonProps) {
  const { isClicked = false, text, style: styleOverride, textStyle: textStyleOverride } = props

  const viewStyle = isClicked === false ? viewPresets.primary : viewPresets.secondary
  const viewStyles = [viewStyle, styleOverride]

  const textStyle = isClicked === false ? textPresets.primary : textPresets.secondary
  const textStyles = [textStyle, textStyleOverride]

  return <Button style={viewStyles} textStyle={textStyles} text={text} />
})
