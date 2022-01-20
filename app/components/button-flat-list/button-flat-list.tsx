import * as React from "react"
import { View, FlatList } from "react-native"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models"
import { SelectButton } from ".."
import { ButtonFlatListProps } from "./button-flat-list.props"
import { viewPresets } from "./button-flat-list.presets"

/**
 * List of selectable buttons specific for the selection of use interest,
 * Do not use for other cases unless you are willing to fiddle with the mst store
 */
export const ButtonFlatList = observer(function ButtonFlatList(props: ButtonFlatListProps) {
  const { preset = "primary", style: styleOverride } = props
  const { interestsStore } = useStores()

  const { interests } = interestsStore

  React.useEffect(() => {
    async function fetchData() {
      await interestsStore.getInterests()
    }

    fetchData()
  }, [])

  const viewStyle = viewPresets[preset] || viewPresets.primary
  const viewStyles = [viewStyle, styleOverride]

  return (
    <View style={viewStyles}>
      <FlatList
        data={[...interests]}
        renderItem={({ index, item }) => (
          <SelectButton key={item.id} text={item.name} interestIndex={index} interest={item} />
        )}
      />
    </View>
  )
})
