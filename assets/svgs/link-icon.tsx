import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "./icon.props"

const LinkIcon = (props: IconProps) => {
  const { size, stroke, fill, style: styleOverride } = props

  const iconSize = size || 24
  const iconStroke = stroke || 1.0
  const iconFill = fill || "none"
  const iconStyle = styleOverride || {}
  return (
    <Svg style={iconStyle} width={iconSize} height={iconSize} fill={iconFill}>
      <Path
        d="M8.18978 10.906C8.57848 11.4262 9.0744 11.8566 9.64388 12.1681C10.2134 12.4795 10.8431 12.6647 11.4904 12.7111C12.1377 12.7575 12.7874 12.664 13.3954 12.437C14.0034 12.21 14.5555 11.8547 15.0143 11.3953L17.7296 8.67721C18.554 7.82282 19.0101 6.67851 18.9998 5.49073C18.9895 4.30296 18.5136 3.16675 17.6745 2.32684C16.8354 1.48692 15.7004 1.01049 14.5138 1.00017C13.3272 0.98985 12.184 1.44646 11.3305 2.27165L9.77372 3.82095M11.8102 9.09398C11.4215 8.57381 10.9256 8.1434 10.3561 7.83195C9.78663 7.5205 9.15688 7.33529 8.5096 7.28889C7.86232 7.24248 7.21264 7.33597 6.60462 7.563C5.99661 7.79004 5.44449 8.14531 4.9857 8.60473L2.27037 11.3228C1.44601 12.1772 0.98986 13.3215 1.00017 14.5093C1.01048 15.697 1.48643 16.8332 2.3255 17.6732C3.16457 18.5131 4.29964 18.9895 5.48622 18.9998C6.6728 19.0101 7.81596 18.5535 8.66949 17.7283L10.2172 16.1791"
        stroke={iconStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LinkIcon
