import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ChevronsRightIcon = (props) => (
  <Svg width={8} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m1.066 1 5.967 6.033L1 13"
      stroke="#090A0A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ChevronsRightIcon
