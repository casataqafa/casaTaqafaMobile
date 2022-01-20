import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ShareIcon = (props) => (
  <Svg width={18} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M1 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6L9 1m0 0L5 5m4-4v13"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ShareIcon
