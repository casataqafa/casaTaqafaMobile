import * as React from "react"
import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  View,
  ViewStyle,
  Image,
  ImageStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing } from "../../theme"
import { Text } from "../text/text"

import { Card } from ".."

const TITLE_STYLING: TextStyle = {
  fontSize: 16,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 20,
  letterSpacing: 0,
  textAlign: "left",

  color: color.palette.black,

  marginLeft: spacing[4],
}

const SUBTITLE_STYLING: TextStyle = {
  color: color.palette.lightGrey,
  marginLeft: spacing[4],

  marginTop: spacing[1],
  width: 174,
  height: 20,

  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 16,
  letterSpacing: 0,
  textAlign: "left",
}

const IMG_STYLING: ImageStyle = {
  borderRadius: 40,
  width: "30%",
  height: "30%",
  aspectRatio: 1,
  marginBottom: spacing[3],
}

const TEXT_WRAPPER: ViewStyle = {
  paddingRight: spacing[3],

  borderTopRightRadius: spacing[4],
  borderBottomRightRadius: spacing[4],
}
interface ItemdData {
  photoUri?: string
  name?: string
  category?: string
}

export interface SearchCardProps extends TouchableOpacityProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  item?: ItemdData
}

/**
 * Describe your component here
 */
export const SearchCard = observer(function SearchCard(props: SearchCardProps) {
  const { item, ...rest } = props
  return (
    <Card preset="PlaceCard" {...rest}>
      <Image
        style={IMG_STYLING}
        source={{
          uri: item.photoUri,
        }}
      />

      <View style={TEXT_WRAPPER}>
        <Text style={TITLE_STYLING} text={item.name} />
        <Text style={SUBTITLE_STYLING} text={item.category} numberOfLines={2} />
      </View>
    </Card>
  )
})
