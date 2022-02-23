import * as React from "react"
import { StyleProp, View, ViewStyle, Animated } from "react-native"
import { observer } from "mobx-react-lite"

import { Chips } from "../chips/chips"
import { flatten } from "ramda"
import { useStores } from "../../models"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

export interface ChipsFlatListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ChipsFlatList = observer(function ChipsFlatList(props: ChipsFlatListProps) {
  const { interestsStore } = useStores()

  const { interests } = interestsStore

  const { style } = props
  const styles = flatten([CONTAINER, style])

  return (
    <View style={styles}>
      <Animated.FlatList
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={interests}
        renderItem={({ item }) => <Chips key={item.id} text={item.name} />}
      />
    </View>
  )
})
