import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = (props) => (
  <Svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m13 13-2.9-2.9m1.567-3.767A5.333 5.333 0 1 1 1 6.333a5.333 5.333 0 0 1 10.667 0Z"
      stroke="#090A0A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SearchIcon
