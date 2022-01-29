import { ViewStyle } from "react-native"
import { color } from "../../theme"

const BASE_VIEW: ViewStyle = {
  flex: 1,

  backgroundColor: color.palette.white,
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

/**
 * A list of preset names.
 */
export type ViewPresetNames = keyof typeof viewPresets
