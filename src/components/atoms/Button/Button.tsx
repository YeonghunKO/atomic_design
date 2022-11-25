import React, { type ReactNode } from 'react';
import StyledButton, { StyledLinkButton } from "./button.styles";
import Icon , {type IconsKey} from '../../Icons/Icon'


interface ButtonProps {
  children:ReactNode;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Optional click handler
   */
  onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void;

  href?: string;
  
   /**
   * Button contents
   */

  /**
  * Type of button
  */
 variant?:string;
 icon?:keyof IconsKey;
  [key: string]: any;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  children,
  onClick,
  variant,
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  color,
  href,
  icon,
  ...props
}: ButtonProps) => {

  if (!href) {
    return (
      <StyledButton onClick={onClick} variant={variant}>
        <Icon icon={icon!} marginRight='5px'/>
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledLinkButton href={href} variant={variant}>
      {children}
    </StyledLinkButton>
  );
};

export default Button