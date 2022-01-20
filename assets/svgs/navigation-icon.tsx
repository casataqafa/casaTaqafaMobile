import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NavigationIcon = (props) => (
  <Svg width={20} height={21} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M1 9.653 19 1l-8.526 18.267-1.895-7.691L1 9.653Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default NavigationIcon
