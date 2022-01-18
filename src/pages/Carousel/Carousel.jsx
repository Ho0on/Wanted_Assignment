import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { InfoCard } from './InfoCard';
import { ReactComponent as LeftArrow } from '../../assets/LeftArrow.svg';
import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg';

export const Carousel = () => {
  const [slideData, setSlideData] = useState([]);
  const [currentSlideId, setCurrentSlideId] = useState(4);

  const getData = async () => {
    const result = await (await fetch('/data/slideData.json')).json();
    setSlideData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const prevSlide = () => {
    // const newSlideData = [...slideData];
    // const shiftData = newSlideData.pop();
    // newSlideData.unshift(shiftData);
    // setSlideData(newSlideData);
    currentSlideId === 0
      ? setCurrentSlideId(slideData.length - 1)
      : setCurrentSlideId(currentSlideId - 1);
  };

  const nextSlide = () => {
    // const newSlideData = [...slideData];
    // const shiftData = newSlideData.shift();
    // newSlideData.push(shiftData);
    // setSlideData(newSlideData);
    currentSlideId >= slideData.length - 1
      ? setCurrentSlideId(0)
      : setCurrentSlideId(currentSlideId + 1);
  };

  return (
    <CarouselWrap>
      <CarouselImg>
        {slideData.map(el => {
          const isActiveSlide = currentSlideId === el.id;
          return (
            <SlideContainer key={el.id} currentSlideId={currentSlideId}>
              {isActiveSlide && (
                <InfoCard title={el.title} content={el.content} />
              )}
              <ImgWrap>
                <SlideImg src={el.img} isActiveSlide={isActiveSlide} />
              </ImgWrap>
            </SlideContainer>
          );
        })}
      </CarouselImg>
      <LeftButton onClick={prevSlide}>
        <LeftArrow />
      </LeftButton>
      <RightButton onClick={nextSlide}>
        <RightArrow />
      </RightButton>
    </CarouselWrap>
  );
};

const CarouselWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  overflow: hidden;
  position: relative;
`;

const CarouselImg = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  margin: 0 auto;
`;

const SlideContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 1060px;
  padding: 0px 12px;
  transform: ${props => `translateX(${4 - props.currentSlideId}00%)`};
  transition: all 0.5s ease-in-out;
`;

const ImgWrap = styled.div`
  width: 1060px;
  background-color: black;
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: ${props => (props.isActiveSlide ? 1 : 0.3)};
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
