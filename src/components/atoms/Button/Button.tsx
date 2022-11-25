import React, { type ReactNode } from 'react';
import StyledButton, { StyledLinkButton } from "./button.styles";
import Icons from '../../Icons'

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
 icon?:keyof typeof Icons;
  [key: string]: any;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
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
  const Icon = Icons[icon!]
  if (!href) {
    return (
      <StyledButton onClick={onClick} variant={variant}>
        <Icon width='1.5rem' height='1.5rem' marginRight='5px'/>
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
