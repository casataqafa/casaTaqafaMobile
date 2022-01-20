import { StyleProp, ViewStyle } from "react-native"
import { ViewPresetNames } from "./button-flat-list.presets"

export interface ButtonFlatListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  preset?: ViewPresetNames
}
