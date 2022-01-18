import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { InfoCard } from './InfoCard';
import { ReactComponent as LeftArrow } from '../../assets/LeftArrow.svg';
import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg';

export const Carousel = () => {
  const [slideData, setSlideData] = useState();

  const getData = async () => {
    const result = await (await fetch('/data/slideData.json')).json();
    setSlideData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CarouselWrap>
      {slideData &&
        slideData.map(el => {
          return (
            <SlideContainer key={el.id}>
              <InfoCard title={el.title} content={el.content} />
              <SlideImg src={el.img} />
            </SlideContainer>
          );
        })}
      <LeftButton>
        <LeftArrow />
      </LeftButton>
      <RightButton>
        <RightArrow />
      </RightButton>
    </CarouselWrap>
  );
};

const CarouselWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  overflow: hidden;
  position: relative;
`;

const SlideContainer = styled.div`
  position: relative;
  max-width: 1060px;
  padding: 0px 12px;
`;

const SlideButton = styled.button`
  width: 30px;
  height: 60px;
  background-color: white;
  opacity: 0.5;
  border: none;
  border-radius: 15px;
  position: absolute;
  z-index: 99;
  cursor: pointer;
`;

const LeftButton = styled(SlideButton)`
  left: 70px;
`;
const RightButton = styled(SlideButton)`
  right: 70px;
`;

const SlideImg = styled.img``;
