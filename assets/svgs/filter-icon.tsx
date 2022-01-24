import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "./icon.props"

const FilterIcon = (props: IconProps) => {
  const { size, stroke, fill, style: styleOverride } = props

  const iconSize = size || 24
  const iconStroke = stroke || 1.0
  const iconFill = fill || "none"
  const iconStyle = styleOverride || {}
  return (
    <Svg style={iconStyle} width={iconSize} height={iconSize} fill={iconFill}>
      <Path
        stroke={iconStroke}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.51 0c.388 0 .703.314.703.702v8.01a.702.702 0 0 1-1.404 0V.702c0-.388.314-.702.702-.702ZM11 0c.388 0 .702.314.702.702v5.019h2.107a.702.702 0 1 1 0 1.404H8.19a.702.702 0 0 1 0-1.404h2.107V.702c0-.388.314-.702.702-.702Zm7.49 0c.387 0 .702.314.702.702V11a.702.702 0 0 1-1.405 0V.702c0-.388.315-.702.702-.702ZM11 10.298c.388 0 .702.314.702.702v10.298a.702.702 0 0 1-1.404 0V11c0-.388.314-.702.702-.702Zm-11 2.99c0-.387.314-.702.702-.702H6.32a.702.702 0 1 1 0 1.405H4.213v7.307a.702.702 0 0 1-1.404 0V13.99H.702A.702.702 0 0 1 0 13.288Zm14.979 2.289c0-.388.314-.702.702-.702h5.617a.702.702 0 0 1 0 1.404h-2.106v5.019a.702.702 0 0 1-1.405 0v-5.019h-2.106a.702.702 0 0 1-.702-.702Z"
        fill="#090A0A"
      />
    </Svg>
  )
}

export default FilterIcon
