import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { StyleProp, ViewStyle } from "react-native"

export interface IconProps {
  /**
   * Option define the width as a string
   */
  width?: number

  /**
   * Option define the height as a string
   */
  height?: number

  /**
   * Optional define the stroke color as a string
   */
  stroke?: string

  style?: StyleProp<ViewStyle>
}
const NavigationIcon = (props: IconProps) => (
  <Svg
    style={props.style}
    width={props.width}
    height={props.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M1 9.653 19 1l-8.526 18.267-1.895-7.691L1 9.653Z"
      stroke={props.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default NavigationIcon
