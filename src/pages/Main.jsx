import React from 'react';
import styled from 'styled-components';
import { Nav } from '../components/Nav';
import { Carousel } from './Carousel/Carousel';

export const Main = () => {
  return (
    <>
      <NavWrap>
        <Nav />
      </NavWrap>
      <SlideWrap>
        <Carousel />
      </SlideWrap>
    </>
  );
};

const NavWrap = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #e1e2e3;
`;

const SlideWrap = styled.div``;
