import * as React from "react"
import { observer } from "mobx-react-lite"
import { SelectButtonProps } from "./select-button.props"
import { Button } from ".."
import { viewPresets, textPresets } from "./select-button.presets"
import { useStores } from "../../models"

/**
 * A button that can be selected and unselected
 */
export const SelectButton = observer(function SelectButton(props: SelectButtonProps) {
  const { interestsStore } = useStores()

  const { interests } = interestsStore

  const {
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    interest,
    interestIndex,
    ...rest
  } = props

  const viewStyle =
    interests[interestIndex].selected === false ? viewPresets.primary : viewPresets.secondary
  const viewStyles = [viewStyle, styleOverride]

  const textStyle =
    interests[interestIndex].selected === false ? textPresets.primary : textPresets.secondary
  const textStyles = [textStyle, textStyleOverride]

  return (
    <Button
      style={viewStyles}
      textStyle={textStyles}
      text={text}
      onPress={() => interest.toggleSelection()}
      {...rest}
    />
  )
})
