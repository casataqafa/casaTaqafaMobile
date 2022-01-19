import React from "react"
import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { translate, TxKeyPath } from "../../i18n"
import { Text } from "../text/text"

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing[1],
  backgroundColor: color.palette.white,
  borderRadius: 8,
  paddingTop: 10,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#e3e5e5",
  width: 327,
  height: 48,
}

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.palette.black,
  width: 295,
  height: 16,

  fontSize: 16,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 16,
  letterSpacing: 0,
  textAlign: "left",
  paddingLeft: 10,
  marginTop: 5,
}

// const LABELSTYLE: TextStyle = {
//   paddingLeft: 10,

// }

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: TxKeyPath

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string

  /**
   * The label i18n key.
   */
  labelTx?: TxKeyPath

  /**
   * The label text if no labelTx is provided.
   */
  label?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: StyleProp<TextStyle>

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS

  forwardedRef?: any
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    secureTextEntry,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    ...rest
  } = props

  const containerStyles = [CONTAINER, PRESETS[preset], styleOverride]
  const inputStyles = [INPUT, inputStyleOverride]
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  return (
    <View style={containerStyles}>
      {/* <Text preset="fieldLabel" style={LABELSTYLE} tx={labelTx} text={label} /> */}
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={color.palette.lightGrey}
        underlineColorAndroid={color.transparent}
        secureTextEntry={secureTextEntry}
        {...rest}
        style={inputStyles}
        ref={forwardedRef}
      />
    </View>
  )
}
