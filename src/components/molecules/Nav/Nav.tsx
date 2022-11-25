import React from 'react';

import StyledNavigation from './Nav.styles';

type Item = {
  href: string;
  text: string;
};

interface Props {
  direction: string;
  items: Item[];
}

const Nav = ({ direction, items }: Props) => {
  return (
    <StyledNavigation direction={direction}>
      {items.map(({ href, text }, ind) => (
        <a key={ind} href={href}>
          {text}
        </a>
      ))}
    </StyledNavigation>
  );
};

export default Nav;
