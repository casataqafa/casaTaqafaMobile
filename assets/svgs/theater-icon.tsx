import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "./icon.props"

const TheaterIcon = (props: IconProps) => {
  const { size, stroke, fill, style: styleOverride } = props

  const iconSize = size || 24
  const iconStroke = stroke || 1.0
  const iconFill = fill || "none"
  const iconStyle = styleOverride || {}
  return (
    <Svg style={iconStyle} width={iconSize} height={iconSize} fill={iconFill}>
      <Path
        d="M5.5 1v13m9-13v13M1 7.5h18M1 4.25h4.5M1 10.75h4.5m9 0H19m-4.5-6.5H19M2.962 1h14.076C18.122 1 19 1.634 19 2.417v10.166c0 .783-.878 1.417-1.962 1.417H2.962C1.878 14 1 13.366 1 12.583V2.417C1 1.634 1.878 1 2.962 1Z"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TheaterIcon
