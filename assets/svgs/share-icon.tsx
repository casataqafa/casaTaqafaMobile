import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "./icon.props"

const ShareIcon = (props: IconProps) => {
  const { size, stroke, fill, style: styleOverride } = props

  const iconSize = size || 24
  const iconStroke = stroke || 1.0
  const iconFill = fill || "none"
  const iconStyle = styleOverride || {}
  return (
    <Svg style={iconStyle} width={iconSize} height={iconSize} fill={iconFill}>
      <Path
        d="M1 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6L9 1m0 0L5 5m4-4v13"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ShareIcon
