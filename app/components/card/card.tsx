import * as React from "react"

import { TouchableOpacity } from "react-native"

import { viewPresets } from "./card.presets"
import { CardProps } from "./card.props"

/**
 * Describe your component here
 */
export function Card(props: CardProps) {
  const {
    preset = "primary",

    style: styleOverride,

    children,
    ...rest
  } = props

  const viewStyle = viewPresets[preset] || viewPresets.primary
  const viewStyles = [viewStyle, styleOverride]

  return (
    <TouchableOpacity style={viewStyles} {...rest}>
      {children}
    </TouchableOpacity>
  )
}
