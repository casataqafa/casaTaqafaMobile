import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HeartIcon = (props) => (
  <Svg width={23} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M20.291 2.612a5.5 5.5 0 0 0-7.78 0l-1.06 1.06-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06 7.78 7.78 7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z"
      stroke="#979C9E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default HeartIcon
