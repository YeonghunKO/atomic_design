import StyledButton, { StyledLinkButton } from './button.styles';
import Icon from '@components/Icons/Icon';
import type { ButtonProps } from '@src/types/Buttons';

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
      <StyledButton
        backgroundColor={backgroundColor}
        onClick={onClick}
        variant={variant}
        {...props}
      >
        <Icon icon={icon!} marginRight="5px" />
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledLinkButton
      backgroundColor={backgroundColor}
      onClick={onClick}
      variant={variant}
      {...props}
      href={href}
    >
      <Icon icon={icon!} marginRight="5px" />
      {children}
    </StyledLinkButton>
  );
};

export default Button;
