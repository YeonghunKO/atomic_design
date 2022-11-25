import styled from 'styled-components';

interface Props {
  direction: string;
}

const StyledNavigation = styled.nav<Props>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'horizontal' ? undefined : 'column'};
  a {
    ${({ direction }) =>
      direction === 'horizontal' ? 'margin-right:10px;' : 'margin-top:10px;'};
  }

  .nav__anchor {
    display: inline-flex;
  }
`;

const StyledNavigationIcon = styled.span``;

export default StyledNavigation;
