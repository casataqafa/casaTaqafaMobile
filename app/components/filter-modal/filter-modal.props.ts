import { StyleProp, ViewStyle } from "react-native"

export interface FilterModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  modalVisible?: boolean

  //toggler?(): void
  toggler?: boolean

  canceller?(): void

  onFilterValueChange?: (val: string) => void
}
