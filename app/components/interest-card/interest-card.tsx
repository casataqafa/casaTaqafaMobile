import * as React from "react"
import { View, Image, ImageStyle, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Card, Text } from ".."
import { color, spacing } from "../../theme"
import { InterestCardProps } from "./interest-card.props"

const CARD_PLACE_IMAGE: ImageStyle = {
  width: 88,
  height: 88,
  borderRadius: 16,
  aspectRatio: 1,
  marginBottom: spacing[3],
}

const CARD_PLACE_TEXT: TextStyle = {
  alignSelf: "center",
  fontWeight: "bold",
  fontSize: 14,
  color: color.palette.black,
  marginBottom: spacing[2],
  lineHeight: 16,
  textAlign: "left",
  letterSpacing: 0,
}

export const InterestCard = observer(function InterestCard(props: InterestCardProps) {
  const { uri, name, ...rest } = props

  return (
    <Card preset="HomeCard" {...rest}>
      <Image
        style={CARD_PLACE_IMAGE}
        source={{
          uri,
        }}
      />

      <View>
        <Text style={CARD_PLACE_TEXT} text={name} />
      </View>
    </Card>
  )
})
