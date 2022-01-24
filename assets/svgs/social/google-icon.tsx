import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { IconProps } from "./../icon.props"

const GoogleIcon = (props: IconProps) => {
  const { size, fill, style: styleOverride } = props

  const iconSize = size || 24

  const iconFill = fill || "none"
  const iconStyle = styleOverride || {}
  return (
    <Svg style={iconStyle} width={iconSize} height={iconSize} fill={iconFill}>
      <G clipPath="url(#a)">
        <Path
          d="M19.761 10.23c0-.68-.055-1.363-.172-2.032h-9.433v3.851h5.402a4.629 4.629 0 0 1-2 3.039v2.498h3.223c1.893-1.741 2.98-4.313 2.98-7.356Z"
          fill="#4285F4"
        />
        <Path
          d="M10.156 20c2.697 0 4.972-.885 6.629-2.413l-3.223-2.499c-.896.61-2.054.955-3.402.955-2.609 0-4.821-1.76-5.615-4.126H1.22v2.576A10.001 10.001 0 0 0 10.156 20Z"
          fill="#34A853"
        />
        <Path
          d="M4.542 11.917a5.99 5.99 0 0 1 0-3.829V5.512H1.22a10.009 10.009 0 0 0 0 8.98l3.322-2.575Z"
          fill="#FBBC04"
        />
        <Path
          d="M10.156 3.958a5.434 5.434 0 0 1 3.836 1.5l2.855-2.856a9.611 9.611 0 0 0-6.69-2.601A9.998 9.998 0 0 0 1.22 5.512l3.322 2.576c.79-2.37 3.005-4.13 5.614-4.13Z"
          fill="#EA4335"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default GoogleIcon
