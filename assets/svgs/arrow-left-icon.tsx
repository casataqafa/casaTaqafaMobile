import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ArrowLeftIcon = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20.333 11H1.667m0 0L11 20.333M1.667 11 11 1.666"
      stroke="#090A0A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ArrowLeftIcon
