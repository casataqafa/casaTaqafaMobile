import * as React from "react"
import { Modal, TextStyle, View, ViewStyle, Image } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import { FavoriteModalProps } from "./favorite-modal.props"
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
  height: "auto",
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

const SUB_CONTENT: ViewStyle = {
  justifyContent: "space-between",
}

const FOOTER_SECTION: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginTop: spacing[5],
  marginBottom: spacing[3],
  //backgroundColor: "green",
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
  textAlign: "center",
  fontSize: 24,
  marginTop: spacing[5],

  fontStyle: "normal",

  lineHeight: 32,
  letterSpacing: 0,
}

const TEXT_SUBTITLE: TextStyle = {
  color: color.palette.lightGrey,
  fontWeight: "normal",
  textAlign: "center",
  fontSize: 16,
  marginTop: spacing[2],

  lineHeight: 24,
  letterSpacing: 0,
}

/**
 * Describe your component here
 * The following is a modal, built specifically for a single screen use-case.
 */
export const FavoriteModal = observer(function FavoriteModal(props: FavoriteModalProps) {
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
            <View style={SUB_CONTENT}>
              <View style={{ marginTop: spacing[5] }}>
                <Image
                  style={{ width: 120, height: 120, borderRadius: 16, alignSelf: "center" }}
                  source={{
                    uri:
                      "https://aujourdhui.ma/wp-content/uploads/2019/12/Casamouja-street-art-.jpg",
                  }}
                />

                <Text style={FILTER_HEADER_TEXTSTYLE} text="Supprimer le lieu ?" />
                <Text
                  style={TEXT_SUBTITLE}
                  text="Voulez-vous vraiment supprimer ce lieu de vos favoris ?"
                />
              </View>
              <View style={FOOTER_SECTION}>
                <Button
                  style={BUTTON_STYLE_SEARCH}
                  textStyle={BUTTON_STYLE_TEXTSTYLE_SEARCH}
                  text="Oui"
                  onPress={searchFunc}
                />
                <Button
                  textStyle={BUTTON_STYLE_CANCEL}
                  onPress={canceller}
                  preset="link"
                  text="Non, merci"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
})
