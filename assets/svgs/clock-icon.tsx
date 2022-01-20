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

const ClockIcon = (props: IconProps) => (
  <Svg
    style={props.style}
    width={props.width}
    height={props.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M7.667 3.667v4L10.333 9m4-1.333A6.667 6.667 0 1 1 1 7.667a6.667 6.667 0 0 1 13.333 0Z"
      stroke={props.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ClockIcon
