import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MapIcon = (props) => (
  <Svg width={20} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M6.727 17 1 21V5l5.727-4m0 16 6.546 4m-6.546-4V1m6.546 20L19 17V1l-5.727 4m0 16V5m0 0L6.727 1"
      stroke="#979C9E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default MapIcon
