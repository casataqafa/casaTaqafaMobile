import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "./icon.props"

const ArrowLeftIcon = (props: IconProps) => {
  const { size, stroke, fill, style: styleOverride } = props

  const iconSize = size || 24
  const iconStroke = stroke || 1.0
  const iconFill = fill || "none"
  const iconStyle = styleOverride || {}
  return (
    <Svg style={iconStyle} width={iconSize} height={iconSize} fill={iconFill}>
      <Path
        d="M20.333 11H1.667m0 0L11 20.333M1.667 11 11 1.666"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowLeftIcon
