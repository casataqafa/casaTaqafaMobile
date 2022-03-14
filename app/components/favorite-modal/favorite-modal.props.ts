import { StyleProp, ViewStyle } from "react-native"

export interface FavoriteModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  modalVisible?: boolean

  //toggler?(): void
  toggler?: boolean

  canceller?(): void

  deletePlace?(): void

  photoUri?(): string
}
