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
const TrashIcon = (props: IconProps) => (
  <Svg
    style={props.style}
    width={props.width}
    height={props.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M1 4.6h2m0 0h16m-16 0v12.6c0 .477.21.935.586 1.273C3.96 18.81 4.47 19 5 19h10c.53 0 1.04-.19 1.414-.527.375-.338.586-.796.586-1.273V4.6H3Zm3 0V2.8c0-.477.21-.935.586-1.273A2.118 2.118 0 0 1 8 1h4c.53 0 1.04.19 1.414.527.375.338.586.796.586 1.273v1.8M8 9.1v5.4m4-5.4v5.4"
      stroke={props.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default TrashIcon
