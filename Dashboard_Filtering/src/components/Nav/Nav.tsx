import React, { useState } from 'react';

import * as S from './Nav.style';

const Nav = () => {
  const [isSideActive, setIsSideActive] = useState(false);

  const handleMenuActive = () => {
    setIsSideActive(!isSideActive);
  };

  return (
    <>
      <S.SideMenu active={isSideActive}>
        <S.SideLogo>
          <S.Img src="/images/blueLogo.png" />
        </S.SideLogo>
        <S.SideMenuList>
          <S.NavItem>
            <S.Icon>
              <S.Img src="/images/blackVector.png" />
            </S.Icon>
            파트너정밀가공
          </S.NavItem>
          <S.Border />
          <S.NavItem>로그아웃</S.NavItem>
        </S.SideMenuList>
      </S.SideMenu>
      <S.Mask onClick={handleMenuActive} active={isSideActive} />
      <S.NavContainer>
        <S.HamburgerIcon className="fas fa-bars" onClick={handleMenuActive} />
        <S.Logo src="/images/logo.png" />
        <S.NavList>
          <S.NavItem>
            <S.Icon>
              <S.Img src="/images/Vector.png" />
            </S.Icon>
            A 가공업체
          </S.NavItem>
          <S.Border />
          <S.NavItem>로그아웃</S.NavItem>
        </S.NavList>
      </S.NavContainer>
    </>
  );
};

export default Nav;
