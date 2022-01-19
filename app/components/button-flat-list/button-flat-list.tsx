import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, SafeAreaView, FlatList } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import { SelectButton } from ".."

const CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
}

export interface ButtonFlatListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ButtonFlatList = observer(function ButtonFlatList(props: ButtonFlatListProps) {
  //const { style } = props

  const data = [
    { interest: "Cinema", id: "1", selected: false },
    { interest: "Cinema", id: "2", selected: false },
    { interest: "Cinema", id: "3", selected: false },
    { interest: "Cinema", id: "4", selected: false },
  ]
  // const styles = flatten([CONTAINER, style])

  const styles = flatten([CONTAINER])

  return (
    <SafeAreaView style={styles}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SelectButton text={item.interest} isClicked={item.selected} />}
      />
    </SafeAreaView>
  )
})
