import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowRightIcon = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 8h14m0 0L8 1m7 7-7 7"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ArrowRightIcon
