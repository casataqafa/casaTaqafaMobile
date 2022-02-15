import { TouchableOpacityProps } from "react-native"

export interface InterestCardProps extends TouchableOpacityProps {
  /**
   * interest card image uri
   */
  uri: string

  /**
   * interest card name
   */
  name: string

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode
}
