import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LibraryIcon = (props) => (
  <Svg width={20} height={15} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M10 3.889c0-.766-.38-1.501-1.054-2.043C8.27 1.304 7.355 1 6.4 1H1v10.833h6.3c.716 0 1.403.229 1.91.635.506.406.79.957.79 1.532m0-10.111V14m0-10.111c0-.766.38-1.501 1.054-2.043C11.73 1.304 12.645 1 13.6 1H19v10.833h-6.3c-.716 0-1.403.229-1.91.635-.505.406-.79.957-.79 1.532"
      stroke="#090A0A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default LibraryIcon
