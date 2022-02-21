import * as React from "react"
import { Modal, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import { FilterModalProps } from "./filter-modal.props"
import { Button } from "../button/button"
import { Checkbox } from "../checkbox/checkbox"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const MODAL_CONTAINER: ViewStyle = {
  justifyContent: "center",
  alignContent: "center",
  flex: 1,
  backgroundColor: "rgba(100,100,100, 0.5)",
}

const MODAL_CONTENT: ViewStyle = {
  height: "50%",
  marginHorizontal: spacing[5],
  paddingHorizontal: spacing[5],

  backgroundColor: "white",
  borderRadius: 20,

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
}

const FILTER_CONTENT: ViewStyle = { flex: 1, marginTop: spacing[6] }

const FOOTER_SECTION: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginTop: spacing[5],
  marginBottom: spacing[3],
  //backgroundColor: "green",
}

const FILTER_ITEMS: ViewStyle = { flexDirection: "column", marginTop: spacing[2] }

const FILTER_ITEM: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: spacing[3],
}

const BUTTON_STYLE_TEXTSTYLE_SEARCH: TextStyle = {
  fontSize: 16,
  fontWeight: "500",
  fontStyle: "normal",

  lineHeight: 16,
  letterSpacing: 0,
  textAlign: "center",
}

const BUTTON_STYLE_SEARCH: ViewStyle = {
  width: "100%",
}

const BUTTON_STYLE_CANCEL: TextStyle = {
  fontSize: 16,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 16,
  letterSpacing: 0,
  textAlign: "center",
  color: color.primary,
}

const FILTER_HEADER_TEXTSTYLE: TextStyle = {
  color: color.palette.black,
  fontWeight: "bold",
  textAlign: "left",
  fontSize: 16,

  fontStyle: "normal",

  lineHeight: 16,
  letterSpacing: 0,
}

const FILTER_ITEMS_TEXTSTYLE: TextStyle = {
  color: color.palette.black,
  fontWeight: "normal",
  textAlign: "left",
  fontSize: 16,

  fontStyle: "normal",

  lineHeight: 16,
  letterSpacing: 0,
}

const CHECKBOX_STYLE: ViewStyle = {
  width: 24,
  height: 24,
  borderRadius: 4,
}

/**
 * Describe your component here
 * The following is modal filter, built specifically for a single screen use-case.
 */
export const FilterModal = observer(function FilterModal(props: FilterModalProps) {
  const { style, canceller, toggler, onFilterValueChange } = props
  const styles = flatten([CONTAINER, style])
  // const [internalModalVisible, setModalVisible] = React.useState(true)

  const [checkboxToggleAll, setcheckboxToggleAll] = React.useState(true)
  const [checkboxTogglePaid, setcheckboxTogglePaid] = React.useState(false)
  const [checkboxToggleFree, setcheckboxToggleFree] = React.useState(false)

  //const [checkboxToggler, setcheckboxToggler] = React.useState(false)

  const globalToggler = (val) => {
    val === "All"
      ? setcheckboxToggleAllFunc() //setcheckboxToggleAll(!checkboxToggleAll)
      : val === "Paid"
      ? setcheckboxTogglePaidFunc() // setcheckboxTogglePaid(!checkboxTogglePaid)
      : val === "Free"
      ? setcheckboxToggleFreeFunc() //setcheckboxToggleFree(!checkboxToggleFree)
      : ""
  }

  const setcheckboxToggleAllFunc = () => {
    setcheckboxToggleAll(!checkboxToggleAll)
    setcheckboxTogglePaid(false)
    setcheckboxToggleFree(false)
    //onFilterValueChange("All")
  }

  const setcheckboxTogglePaidFunc = () => {
    setcheckboxTogglePaid(!checkboxTogglePaid)
    setcheckboxToggleAll(false)

    setcheckboxToggleFree(false)
    //onFilterValueChange("Paid")
  }

  const setcheckboxToggleFreeFunc = () => {
    setcheckboxToggleFree(!checkboxToggleFree)
    setcheckboxToggleAll(false)
    setcheckboxTogglePaid(false)

    //onFilterValueChange("Free")
  }

  const searchFunc = () => {
    checkboxToggleAll === true
      ? onFilterValueChange("All")
      : checkboxTogglePaid === true
      ? onFilterValueChange("Paid")
      : checkboxToggleFree === true
      ? onFilterValueChange("Free")
      : false
    canceller()
  }

  return (
    <View style={styles}>
      <Modal animationType="fade" transparent={true} visible={toggler}>
        <View style={MODAL_CONTAINER}>
          <View style={MODAL_CONTENT}>
            <View style={FILTER_CONTENT}>
              <Text style={FILTER_HEADER_TEXTSTYLE} text="Sort by" />
              <View style={FILTER_ITEMS}>
                <View style={FILTER_ITEM}>
                  <Text style={FILTER_ITEMS_TEXTSTYLE} text="All" />
                  <Checkbox
                    fillStyle={CHECKBOX_STYLE}
                    outlineStyle={CHECKBOX_STYLE}
                    value={checkboxToggleAll}
                    onToggle={() => globalToggler("All")}
                  />
                </View>
                <View style={FILTER_ITEM}>
                  <Text style={FILTER_ITEMS_TEXTSTYLE} text="Paid" />
                  <Checkbox
                    fillStyle={CHECKBOX_STYLE}
                    outlineStyle={CHECKBOX_STYLE}
                    value={checkboxTogglePaid}
                    onToggle={() => globalToggler("Paid")}
                  />
                </View>
                <View style={FILTER_ITEM}>
                  <Text style={FILTER_ITEMS_TEXTSTYLE} text="Free" />
                  <Checkbox
                    value={checkboxToggleFree}
                    onToggle={() => globalToggler("Free")}
                    fillStyle={CHECKBOX_STYLE}
                    outlineStyle={CHECKBOX_STYLE}
                  />
                </View>
              </View>
            </View>
            <View style={FOOTER_SECTION}>
              <Button
                style={BUTTON_STYLE_SEARCH}
                textStyle={BUTTON_STYLE_TEXTSTYLE_SEARCH}
                text="Search"
                onPress={searchFunc}
              />
              <Button
                textStyle={BUTTON_STYLE_CANCEL}
                onPress={canceller}
                preset="link"
                text="Cancel"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
})
