import { ViewStyle, TextStyle, ImageStyle } from "react-native"
import { color, spacing } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  maxWidth: 141,
  marginRight: spacing[4],
}

const BASE_TEXT: TextStyle = {
  fontWeight: "bold",

  marginBottom: spacing[2],
  lineHeight: 16,
  textAlign: "left",
  letterSpacing: 0,
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
  HomeCard: {
    ...BASE_VIEW,

    marginBottom: spacing[2],
  } as ViewStyle,

  /**
   *
   * A Disabled Version of the button
   */

  ArtistCard: { ...BASE_VIEW, flexDirection: "row" } as ViewStyle,

  PlaceCard: {
    ...BASE_VIEW,
    flexDirection: "row",
    width: 325,
    height: 109,

    borderRadius: 16,
  } as ViewStyle,
}

export const textPresets: Record<CardPresetNames, TextStyle> = {
  primary: { ...BASE_TEXT, fontSize: 16, color: color.palette.black } as TextStyle,

  secondary: {
    ...BASE_TEXT,
    fontSize: 12,
    color: color.palette.lightGrey,
    fontWeight: "normal",
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type CardPresetNames = keyof typeof viewPresets
