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

const TITLE_STYLING: TextStyle = {
  marginTop: spacing[4],

  color: color.palette.black,

  marginLeft: spacing[4],

  height: "50%",

  fontSize: 18,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
}

const SUBTITLE_STYLING: TextStyle = {
  color: color.palette.black,
  marginLeft: spacing[4],

  width: 240,
  height: 68.2,
  paddingVertical: spacing[2],
  marginTop: -24,
  fontSize: 15,
  fontWeight: "200",
  fontStyle: "normal",
  letterSpacing: 0,
}

const IMAGE_STYLING: ImageStyle = {
  borderTopLeftRadius: 16,
  borderBottomLeftRadius: 16,
  height: "100%",
  aspectRatio: 1,
  marginBottom: spacing[3],
}

const CONTENT: ViewStyle = {
  flexDirection: "row",
  backgroundColor: color.palette.white,
  borderTopRightRadius: 16,
  borderBottomRightRadius: 16,
}

interface ItemdData {
  photoUri?: string
  name?: string
  category?: string
}

export interface PlacesCardProps extends TouchableOpacityProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  item?: ItemdData
}

/**
 * Describe your component here
 */
export const PlacesCard = observer(function PlacesCard(props: PlacesCardProps) {
  const { style, item, ...rest } = props
  const styles = flatten([style])

  return (
    <Card preset="PlaceCard" style={styles} {...rest}>
      <Image
        style={IMAGE_STYLING}
        source={{
          uri: item.photoUri,
        }}
      />
      <View style={CONTENT}>
        <View>
          <Text style={TITLE_STYLING} text={item.name} />
          <Text style={SUBTITLE_STYLING} numberOfLines={2} text={item.category} />
        </View>
      </View>
    </Card>
  )
})
