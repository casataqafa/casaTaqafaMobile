import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "./icon.props"

const NavigationIcon = (props: IconProps) => {
  const { size, stroke, fill, style: styleOverride } = props

  const iconSize = size || 24
  const iconStroke = stroke || 1.0
  const iconFill = fill || "none"
  const iconStyle = styleOverride || {}
  return (
    <Svg style={iconStyle} width={iconSize} height={iconSize} fill={iconFill}>
      <Path
        d="M1 9.653 19 1l-8.526 18.267-1.895-7.691L1 9.653Z"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NavigationIcon
