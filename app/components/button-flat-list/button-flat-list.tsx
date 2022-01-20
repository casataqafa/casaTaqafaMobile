import * as React from "react"
import { StyleProp, ViewStyle, View, FlatList } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { flatten } from "ramda"
import { useStores } from "../../models"
import { SelectButton } from ".."
import { ButtonFlatListProps } from "./button-flat-list.props"

const CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
}

/**
 * Describe your component here
 */
export const ButtonFlatList = observer(function ButtonFlatList(props: ButtonFlatListProps) {
  const { interestsStore } = useStores()

  const { interests } = interestsStore

  // const styles = flatten([CONTAINER, style])

  React.useEffect(() => {
    async function fetchData() {
      await interestsStore.getInterests()
    }

    fetchData()
  }, [interestsStore])

  const styles = flatten([CONTAINER])

  return (
    <View style={styles}>
      <FlatList
        data={[...interests]}
        renderItem={({ index, item }) => (
          <SelectButton key={item.id} text={item.name} index={index} interest={item} />
        )}
      />
    </View>
  )
})
