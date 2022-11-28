import type { ReactNode } from 'react';
import type { IconsKey } from '@components/Icons/Icon';
interface ButtonProps {
  children: ReactNode;
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  href?: string;

  /**
   * Button contents
   */

  /**
   * Type of button
   */
  variant?: string;
  icon?: keyof IconsKey;
  [key: string]: any;
}

export type { ButtonProps };
