import { ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  borderRadius: 48,
  justifyContent: "center",
  alignItems: "center",
  height: 48,
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
  fontWeight: "500",
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
  primary: { ...BASE_VIEW, backgroundColor: color.palette.red } as ViewStyle,

  /**
   * A Disabled Version of the button
   */

  disabled: { ...BASE_VIEW, backgroundColor: color.palette.disabled } as ViewStyle,

  /**
   * A transparent version of the button
   */
  transparent: { ...BASE_VIEW, backgroundColor: color.palette.white } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: { ...BASE_TEXT, fontSize: 16, color: color.palette.white } as TextStyle,
  disabled: { ...BASE_TEXT, fontSize: 16, color: color.palette.white } as TextStyle,
  transparent: { ...BASE_TEXT, fontSize: 16, color: color.palette.red } as TextStyle,

  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
