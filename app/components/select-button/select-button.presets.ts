import { ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  // marginVertical: spacing[3],
  marginBottom: spacing[3],
  marginHorizontal: spacing[5],
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
  height: 40,
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
  fontWeight: "normal",
}

export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW, backgroundColor: "#F2F4F5" } as ViewStyle,

  /**
   * When the button is clicked
   */
  secodnary: { ...BASE_VIEW, backgroundColor: color.palette.lighterRed } as ViewStyle,
}

export const textPresets: Record<SelectButtonPresetNames, TextStyle> = {
  primary: { ...BASE_TEXT, fontSize: 16, color: color.palette.black } as TextStyle,

  secodnary: { ...BASE_TEXT, backgroundColor: color.palette.white } as TextStyle,
}

/**
 * A list of preset names.
 */
export type SelectButtonPresetNames = keyof typeof viewPresets
