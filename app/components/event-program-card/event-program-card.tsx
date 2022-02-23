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
import { Card } from "../card/card"

const CARD_STYLE: ViewStyle = {
  marginBottom: spacing[5],
  flex: 1,

  maxWidth: "75%",
}

const TEXT_TITLE: TextStyle = {
  fontWeight: "bold",
  color: color.palette.black,
  marginBottom: spacing[2],
  fontSize: 16,

  marginLeft: spacing[4],
  lineHeight: spacing[5],
  textAlign: "left",
}

const TEXT_SUBTITLE: TextStyle = {
  fontWeight: "normal",
  marginBottom: spacing[2],
  color: color.palette.lightGrey,
  marginLeft: spacing[4],

  fontSize: 12,
  lineHeight: 16,
  textAlign: "left",
}

const IMG_STYLE: ImageStyle = {
  borderRadius: 16,

  aspectRatio: 1,
}

interface ItemdData {
  id?: string
  photoUri?: string
  name?: string
  description?: string
  headline?: string
  showDate?: string
  link?: string
  buyLink?: string
  price?: number
}

export interface EventProgramCardProps extends TouchableOpacityProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  item?: ItemdData
}

/**
 * Describe your component here
 */
export const EventProgramCard = observer(function EventProgramCard(props: EventProgramCardProps) {
  const { item, ...rest } = props

  return (
    <Card style={CARD_STYLE} preset="ArtistCard" {...rest}>
      <Image
        style={IMG_STYLE}
        source={{
          uri: item.photoUri,
        }}
      />

      <View style={{}}>
        <Text numberOfLines={2} style={TEXT_TITLE} text={item.name} />

        <Text style={TEXT_SUBTITLE} numberOfLines={2} text={item.showDate} />
      </View>
    </Card>
  )
})
