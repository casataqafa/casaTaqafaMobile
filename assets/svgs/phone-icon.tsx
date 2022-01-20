import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PhoneIcon = (props) => (
  <Svg width={15} height={15} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M14 10.733v1.957a1.304 1.304 0 0 1-1.425 1.305 12.95 12.95 0 0 1-5.641-2.003 12.733 12.733 0 0 1-3.922-3.914 12.893 12.893 0 0 1-2.007-5.656 1.302 1.302 0 0 1 .774-1.31A1.31 1.31 0 0 1 2.306 1h1.96a1.309 1.309 0 0 1 1.308 1.122c.083.626.236 1.241.458 1.833a1.302 1.302 0 0 1-.294 1.377l-.83.828a10.448 10.448 0 0 0 3.921 3.914l.83-.828a1.308 1.308 0 0 1 1.38-.294c.593.221 1.209.374 1.836.457A1.308 1.308 0 0 1 14 10.733Z"
      stroke="#090A0A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default PhoneIcon
