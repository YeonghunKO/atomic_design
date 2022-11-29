import styled from 'styled-components';
import { backgroundColor, bannerTextColour } from '@src/shared/color';
import { ColorProps } from '@src/types/Color';

const StyledBanner = styled.section`
  ${({ theme }) => theme.flexColumn}
  background-color: ${(props: ColorProps) => backgroundColor(props)};
  color: ${(props: ColorProps) => bannerTextColour(props)};
  align-items: center;
  justify-content: center;
  padding: 2rem;

  p {
    width: 30%;
    text-align: center;
  }
`;

export default StyledBanner;
