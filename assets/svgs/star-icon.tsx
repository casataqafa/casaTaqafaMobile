import * as React from "react"
import Svg, { Path } from "react-native-svg"

const StarIcon = (props) => (
  <Svg width={18} height={23} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m9 1 2.472 6.68L17 8.758l-4 5.197.944 7.342L9 17.828l-4.944 3.469L5 13.955 1 8.758 6.528 7.68 9 1Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default StarIcon
