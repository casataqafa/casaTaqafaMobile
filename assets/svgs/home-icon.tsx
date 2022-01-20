import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeIcon = (props) => (
  <Svg width={20} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m1 8 9-7 9 7v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8Z"
      stroke="#FE5850"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default HomeIcon
