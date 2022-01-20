import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CinemaIcon = (props) => (
  <Svg width={20} height={15} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M19 2.857 13.273 7.5 19 12.143V2.857ZM11.636 1h-9C1.733 1 1 1.831 1 2.857v9.286C1 13.168 1.733 14 2.636 14h9c.904 0 1.637-.832 1.637-1.857V2.857C13.273 1.831 12.54 1 11.636 1Z"
      stroke="#090A0A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CinemaIcon
