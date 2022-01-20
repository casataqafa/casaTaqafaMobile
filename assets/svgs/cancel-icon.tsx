import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CancelIcon = (props) => (
  <Svg width={10} height={10} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M9 1 1 9m0-8 8 8" stroke="#090A0A" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
)

export default CancelIcon
