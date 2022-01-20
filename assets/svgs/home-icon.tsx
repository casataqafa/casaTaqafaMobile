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

const HomeIcon = (props: IconProps) => (
  <Svg
    style={props.style}
    width={props.width}
    height={props.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="m1 8 9-7 9 7v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8Z"
      stroke={props.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default HomeIcon
