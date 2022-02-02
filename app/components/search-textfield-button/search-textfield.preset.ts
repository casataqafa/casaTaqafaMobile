import { ViewStyle, TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  borderRadius: 8,
  backgroundColor: "#ffffff",

  height: 36,
  paddingHorizontal: spacing[3],

  paddingVertical: spacing[3],

  flexDirection: "row",
}

const BUTTON_CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginRight: "75%",
}

const ICON_CONTAINER: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginTop: spacing[3],
}

const BASE_TEXT: TextStyle = {
  fontSize: 16,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 16,
  letterSpacing: 0,
  textAlign: "left",
  color: color.palette.lightGrey,
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

export const textPresets: Record<SearchTextfieldButtonNames, TextStyle> = {
  primary: { ...BASE_TEXT } as TextStyle,
}

/**
 * A list of preset names.
 */
export type SearchTextfieldButtonNames = keyof typeof viewPresets
