import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "./icon.props"

const MapPinIcon = (props: IconProps) => {
  const { size, stroke, fill, style: styleOverride } = props

  const iconSize = size || 24
  const iconStroke = stroke || 1.0
  const iconFill = fill || "none"
  const iconStyle = styleOverride || {}
  return (
    <Svg style={iconStyle} width={iconSize} height={iconSize} fill={iconFill}>
      <Path
        d="M19 8.364C19 14.09 10 19 10 19S1 14.09 1 8.364c0-1.953.948-3.826 2.636-5.207C5.324 1.776 7.613 1 10 1s4.676.776 6.364 2.157C18.052 4.537 19 6.41 19 8.364Z"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 10.818c1.657 0 3-1.099 3-2.454 0-1.356-1.343-2.455-3-2.455S7 7.008 7 8.364c0 1.355 1.343 2.454 3 2.454Z"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MapPinIcon
