import React from 'react';

import StyledNavigation from './Nav.styles';
import Icon, {type IconsKey } from '@components/Icons/Icon';

type Item = {
  url: string;
  text: string;
  icon?: keyof IconsKey | any;
};

interface Props {
  direction: string;
  items: Item[];
}

const Nav = ({ direction, items }: Props) => {
  return (
    <StyledNavigation direction={direction}>
      {items.map(({ url, text, icon }, ind) => (
        <a className="nav__anchor" key={ind} href={url}>
          {icon ? <Icon icon={icon} marginRight="5px" /> : <span>{text}</span>}
        </a>
      ))}
    </StyledNavigation>
  );
};

export default Nav;
