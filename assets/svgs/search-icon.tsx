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
const SearchIcon = (props: IconProps) => (
  <Svg
    style={props.style}
    width={props.width}
    height={props.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="m13 13-2.9-2.9m1.567-3.767A5.333 5.333 0 1 1 1 6.333a5.333 5.333 0 0 1 10.667 0Z"
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SearchIcon
