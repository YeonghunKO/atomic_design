import styled from 'styled-components';
import { backgroundColor } from '@src/shared/color';
import type { ColorProps } from '@src/types/Color';

const StyledButton = styled.button`
  align-items: center;
  display: inline-flex;
  padding: 16px;
  background-color: ${(props: ColorProps) => backgroundColor(props)};
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: ${props => props.theme.white};
  cursor: pointer;
  font-weight: 700;
  line-height: 1;
  transition: all 0.15s ease;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: 'a' })``;

export default StyledButton;
