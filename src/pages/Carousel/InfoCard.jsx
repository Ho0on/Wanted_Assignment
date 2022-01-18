import React from 'react';
import styled from 'styled-components';

import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg';

export const InfoCard = ({ title, content }) => {
  return (
    <CardWrap>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Btn>
        바로가기
        <RightArrowWrap>
          <RightArrow />
        </RightArrowWrap>
      </Btn>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  position: absolute;
  width: 330px;
  height: 146px;
  left: 34px;
  bottom: 28px;
  border-radius: 4px;
  background-color: white;
  text-align: left;

  @media screen and (max-width: 1200px) {
    position: static;
    text-align: center;
  } ;
`;

const Title = styled.h2`
  margin: 20px 20px 0px 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
`;

const Content = styled.h3`
  height: 44px;
  padding: 0px 20px;
  border-bottom: 1px solid #dbdbdb;
  font-size: 14px;
  line-height: 1.64;

  @media screen and (max-width: 1200px) {
    border: none;
    height: 28px;
  } ;
`;

const Btn = styled.button`
  display: flex;
  margin: 11px 0 0 13px;
  padding: 6px 8px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 700;
  color: #36f;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
  } ;
`;

const RightArrowWrap = styled.span`
  width: 1em;
  height: 1em;
  fill: currentColor;
`;
