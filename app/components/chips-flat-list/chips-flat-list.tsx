import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, FlatList } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Chips } from "../chips/chips"
import { flatten } from "ramda"
import CinemaIcon from "../../../assets/svgs/cinema-icon"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const data = [
  { id: "1", text: "Cinema", icon: <CinemaIcon size={18} stroke={"#090A0A"} /> },
  { id: "2", text: "Cinema", icon: <CinemaIcon size={18} stroke={"#090A0A"} /> },
  { id: "3", text: "Cinema", icon: <CinemaIcon size={18} stroke={"#090A0A"} /> },
  { id: "4", text: "Cinema", icon: <CinemaIcon size={18} stroke={"#090A0A"} /> },
  { id: "5", text: "Cinema", icon: <CinemaIcon size={18} stroke={"#090A0A"} /> },
]

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
  const { style } = props
  const styles = flatten([CONTAINER, style])

  return (
    <View style={styles}>
      <FlatList
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ index, item }) => (
          <Chips key={item.id} leftIcon={item.icon} text={item.text} />
        )}
      />
    </View>
  )
})
