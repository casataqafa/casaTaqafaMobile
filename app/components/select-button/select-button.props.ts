import { ButtonProps } from "../button/button.props"

export interface SelectButtonProps extends ButtonProps {
  /**
   * The indicator if the button is `selected` or not
   */
  isClicked?: boolean
}
