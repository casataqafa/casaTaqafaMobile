import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "./icon.props"

const ClockIcon = (props: IconProps) => {
  const { size, stroke, fill, style: styleOverride } = props

  const iconSize = size || 24
  const iconStroke = stroke || 1.0
  const iconFill = fill || "none"
  const iconStyle = styleOverride || {}
  return (
    <Svg style={iconStyle} width={iconSize} height={iconSize} fill={iconFill}>
      <Path
        d="M7.667 3.667v4L10.333 9m4-1.333A6.667 6.667 0 1 1 1 7.667a6.667 6.667 0 0 1 13.333 0Z"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ClockIcon
