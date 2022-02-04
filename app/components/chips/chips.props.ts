import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native"
import { ChipsPresetNames } from "./chips.presets"
import { TxKeyPath } from "../../i18n"

export interface ChipsProps extends TouchableOpacityProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  leftIcon?: any

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * An optional style override useful for the button text.
   */
  buttonStyle?: StyleProp<ViewStyle>

  /**
   *
   * /**
   * An optional style override useful for the button text.
   */
  iconStyle?: StyleProp<ViewStyle>

  /**

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * One of the different types of text presets.
   */
  preset?: ChipsPresetNames

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode
}
