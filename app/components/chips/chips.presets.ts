import { ViewStyle, TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  borderRadius: 48,
  backgroundColor: "#ffffff",
  marginRight: spacing[3],

  paddingHorizontal: spacing[4],

  paddingVertical: spacing[3],

  flexDirection: "row",
}

const BUTTON_CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 4,
}

const ICON_CONTAINER: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 16,
  fontWeight: "normal",
  lineHeight: 16,
  letterSpacing: 0,
  color: color.palette.black,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW } as ViewStyle,
}

export const buttonPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BUTTON_CONTAINER } as ViewStyle,
}

export const iconPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...ICON_CONTAINER } as ViewStyle,
}

export const textPresets: Record<ChipsPresetNames, TextStyle> = {
  primary: { ...BASE_TEXT } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ChipsPresetNames = keyof typeof viewPresets
