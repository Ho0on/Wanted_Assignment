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
      <LeftButton>
        <LeftArrow />
      </LeftButton>
      <RightButton>
        <RightArrow />
      </RightButton>
      {slideData &&
        slideData.map(el => {
          return (
            <SlideContainer key={el.id}>
              <InfoCard />
              <SlideImg src={el.img} />
            </SlideContainer>
          );
        })}
    </CarouselWrap>
  );
};

const CarouselWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  overflow: hidden;
`;

const SlideContainer = styled.div`
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
`;

const LeftButton = styled(SlideButton)`
  left: 160px;
`;
const RightButton = styled(SlideButton)`
  right: 160px;
`;

const SlideImg = styled.img``;
