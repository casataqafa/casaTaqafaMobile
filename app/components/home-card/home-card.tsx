import * as React from "react"
import {
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  TouchableOpacityProps,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import { Card } from "../card/card"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const IMG_STYLE: ImageStyle = {
  width: 141,
  height: 141,
  borderRadius: 16,
  aspectRatio: 1,
  marginBottom: spacing[3],
}
const HEADER_TEXT: TextStyle = {
  fontWeight: "bold",
  color: color.palette.black,
  marginBottom: spacing[2],
  lineHeight: 16,
  textAlign: "left",
  letterSpacing: 0,
}

const SUBTITLE_TEXT: TextStyle = {
  fontWeight: "normal",
  marginBottom: spacing[2],
  color: color.palette.lightGrey,

  fontSize: 12,
  lineHeight: 16,
  textAlign: "left",
  letterSpacing: 0,
}

interface ItemdData {
  photoUri?: string
  name?: string
  description?: string
}

export interface HomeCardProps extends TouchableOpacityProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  item?: ItemdData
}

/**
 * Describe your component here
 */
export const HomeCard = observer(function HomeCard(props: HomeCardProps) {
  const { style, item, ...rest } = props
  const styles = flatten([CONTAINER, style])

  return (
    <Card style={styles} preset="HomeCard" {...rest}>
      <Image
        style={IMG_STYLE}
        source={{
          uri: item.photoUri,
        }}
      />

      <View>
        <Text style={HEADER_TEXT}>{item.name}</Text>

        <Text style={SUBTITLE_TEXT} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </Card>
  )
})
