import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ClockIcon = (props) => (
  <Svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M7.667 3.667v4L10.333 9m4-1.333A6.667 6.667 0 1 1 1 7.667a6.667 6.667 0 0 1 13.333 0Z"
      stroke="#090A0A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ClockIcon
