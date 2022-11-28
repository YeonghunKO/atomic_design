import React, { useState } from 'react';
import StyledHeader from './Header.styles';
import CelticLogo from '@src/assets/Celtic_FC.png';
import Nav from '@src/components/molecules/Nav/Nav';
import Button from '@src/components/atoms/Button/Button';
import type { HeaderProps } from '@src/types/Header';

const Header = ({ navigation }: HeaderProps) => {
  const [isMenu, setIsMenu] = useState(false);

  const onButton = () => {
    setIsMenu(preIsMenu => !preIsMenu);
  };

  return (
    <StyledHeader className={`${isMenu ? 'show' : 'close'}`}>
      <img src={CelticLogo} alt="Celtic_FC" />
      <div className="header__navigation__wrapper">
        {navigation.map(({ title, items }) => (
          <div key={`header__nav__${title}`} className="header__navigation">
            <Nav direction="horizontal" items={items} />
          </div>
        ))}
      </div>
      <Button onClick={onButton}>{isMenu ? 'close' : 'show'} menu</Button>
    </StyledHeader>
  );
};

export default Header;
