import { StyleProp, ViewStyle } from "react-native"

export interface IconProps {
  /**
   * Option define the width as a string
   */
  size?: number

  /**
   * Optional define the stroke color as a string
   */
  stroke?: any

  /**
   * Optional defien the fill color as a string
   */

  fill?: string

  /**
   * optional styles to override the base styles
   */
  style?: StyleProp<ViewStyle>
}
