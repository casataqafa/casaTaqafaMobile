import React from "react"
import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { translate, TxKeyPath } from "../../i18n"

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing[4],
  backgroundColor: color.palette.white,
  borderRadius: 8,
  paddingTop: spacing[3],
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#e3e5e5",
  width: "100%",
  height: 48,
  padding: 16,
}

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.palette.black,
  width: 295,
  height: spacing[5],
  textAlignVertical: "top",
  fontSize: 16,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: spacing[4],
  letterSpacing: 0,
  textAlign: "left",
}

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},

  /**
   * A preset for text password text fields
   */
  password: { ...INPUT, ...CONTAINER } as ViewStyle,
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
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    ...rest
  } = props

  const containerStyles = [CONTAINER, PRESETS[preset], styleOverride]
  const secureTextEntry = preset === "password"
  const inputStyles = [INPUT, inputStyleOverride]
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  return (
    <View style={containerStyles}>
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
