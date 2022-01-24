import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native"
import { CardPresetNames } from "./card.presets"

export interface CardProps extends TouchableOpacityProps {
  /**
   * 
   
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * One of the different types of text presets.
   */
  preset?: CardPresetNames

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode
}
