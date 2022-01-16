import React from 'react';
import styled from 'styled-components';

export const Main = () => {
  return (
    <>
      <NavWrap>
        <Nav>dodo</Nav>
      </NavWrap>
      <SlideWrap>dffd</SlideWrap>
    </>
  );
};

const NavWrap = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
`;
const Nav = styled.nav`
  max-width: 1060px;
  margin: 0 auto;
`;

const SlideWrap = styled.div``;
