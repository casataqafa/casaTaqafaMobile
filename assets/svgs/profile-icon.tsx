import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ProfileIcon = (props) => (
  <Svg width={18} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M17 19v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke="#979C9E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ProfileIcon
