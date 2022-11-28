import React from 'react';
import StyledHeader from './Header.styles';
import CelticLogo from '@src/assets/Celtic_FC.png';
import Nav from '@src/components/molecules/Nav/Nav';

type ItemKey = 'url' | 'text' | 'icon';

type Navigation = {
  title: string;
  items: Record<ItemKey, string | any>[];
};

interface HeaderProps {
  navigation: Navigation[];
}

const Header = ({ navigation }: HeaderProps) => {
  return (
    <StyledHeader>
      {navigation.map(({ title, items }) => (
        <div className="header__navigation">
          <Nav
            key={`header__nav__${title}`}
            direction="horizontal"
            items={items}
          />
        </div>
      ))}
      <img src={CelticLogo} alt="Celtic_FC" />
    </StyledHeader>
  );
};

export default Header;
