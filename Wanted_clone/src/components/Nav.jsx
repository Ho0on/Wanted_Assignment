import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Search } from '../assets/Search.svg';
import { ReactComponent as Bell } from '../assets/Bell.svg';
import { ReactComponent as MoreBtn } from '../assets/MoreBtn.svg';

const NAV_ITEM = [
  '채용',
  '이벤트',
  '직군별 연봉',
  '이력서',
  '커뮤니티',
  '프리랜서',
  'AI 합격예측',
];

export const Nav = () => {
  return (
    <NavBox>
      <NavLeftWrap>
        <MenuIcon src="https://static.wanted.co.kr/images/icon-menu.png" />
        <Logo>wanted</Logo>
      </NavLeftWrap>
      <NavCenterWrap>
        {NAV_ITEM.map((el, index) => (
          <CenterItem key={index}>{el}</CenterItem>
        ))}
      </NavCenterWrap>
      <NavRightWrap>
        <RightItem>
          <Search />
        </RightItem>
        <RightItem>
          <Bell />
        </RightItem>
        <RightItem>
          <ProfileImgBorder>
            <ProfileImg src="/images/PumpkinCat.PNG" />
          </ProfileImgBorder>
        </RightItem>
        <GrayLine />
        <MoreBtn />
        <RightItem>기업 서비스</RightItem>
      </NavRightWrap>
    </NavBox>
  );
};

const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1060px;
  margin: 0 auto;

  @media screen and (max-width: 1060px) {
    justify-content: space-around;
  }
`;

const NavLeftWrap = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.img`
  width: 17px;
  height: 14px;
  margin-right: 15px;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const NavCenterWrap = styled.ul`
  display: flex;
  color: #333333;
`;

const CenterItem = styled.li`
  padding: 15px;
  font-size: 14px;
  font-weight: 600;
`;

const NavRightWrap = styled.ul`
  display: flex;
  align-items: center;
  padding: 8px 0px;

  li:nth-child(6) {
    padding: 8px 10px;
    border: 1px solid #e1e2e3;
    border-radius: 40px;
    color: #666666;
  }
`;

const RightItem = styled.li`
  padding: 3px;
  font-size: 14px;
  margin: 0px 7px;

  @media screen and (max-width: 993px) {
    :nth-child(6) {
      display: none;
    }
  }
`;

const ProfileImgBorder = styled.div`
  width: 31px;
  height: 31px;
  padding: 1px;
  border: 1px solid grey;
  border-radius: 50%;

  @media screen and (max-width: 993px) {
    display: none;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

const GrayLine = styled.div`
  border-left: 1px solid #e1e2e3;
  height: 10px;
  margin: 0 15px;

  @media screen and (max-width: 993px) {
    display: none;
  }
`;
