import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  formatingNumber,
  formatingTimestamp,
  makingTapMenu,
  calculateCurrency,
} from '../../utils';

function SecondCalculator() {
  const [currencyData, setCurrencyData] = useState();
  const [payValue, setPayValue] = useState(0);
  const [selectedDropUnit, setSelectedDropUnit] = useState('USD');
  const [selectedTapUnit, setSelectedTapUnit] = useState('KRW');
  const [date, setDate] = useState();

  const getData = async () => {
    const result = await (
      await fetch(process.env.REACT_APP_API_ADDRESS)
    ).json();
    setCurrencyData([
      { name: 'USD', value: result.quotes.USDUSD },
      { name: 'KRW', value: result.quotes.USDKRW },
      { name: 'HKD', value: result.quotes.USDHKD },
      { name: 'JPY', value: result.quotes.USDJPY },
      { name: 'CAD', value: result.quotes.USDCAD },
      { name: 'CNY', value: result.quotes.USDCNY },
    ]);
    setDate(formatingTimestamp(result.timestamp));
  };

  useEffect(() => {
    getData();
  }, []);

  const changeInputValue = event => {
    setPayValue(event.target.value);
  };

  const handleDropMenu = e => {
    const { value } = e.target;
    setSelectedDropUnit(value);
    setSelectedTapUnit(makingTapMenu(currencyData, value)[0].name);
    calculateCurrency(currencyData, value, selectedTapUnit, payValue);
  };

  const handleTapMenu = e => {
    const { innerHTML } = e.target;
    setSelectedTapUnit(innerHTML);
    calculateCurrency(currencyData, selectedDropUnit, innerHTML, payValue);
  };

  return (
    <Wrapper>
      <Container>
        <CurrencyTopBox>
          <PayBox
            type="number"
            onChange={changeInputValue}
            value={payValue > 1000 ? 1000 : payValue}
          />
          <SelectBox>
            <Selected onChange={handleDropMenu}>
              {currencyData &&
                currencyData.map((el, idx) => {
                  return <option key={idx}>{el.name}</option>;
                })}
            </Selected>
          </SelectBox>
        </CurrencyTopBox>
        <CurrencyBottomBox>
          <UnitTab>
            {currencyData &&
              makingTapMenu(currencyData, selectedDropUnit).map((el, idx) => {
                return (
                  <UnitListWrapper
                    key={idx}
                    onClick={handleTapMenu}
                    active={el.name === selectedTapUnit}
                  >
                    <UnitListItem>{el.name}</UnitListItem>
                  </UnitListWrapper>
                );
              })}
          </UnitTab>
          <CurrencyResultBox>
            <Nation>
              <Name>{selectedTapUnit}</Name>
              <Currency>
                {currencyData &&
                  formatingNumber(
                    calculateCurrency(
                      currencyData,
                      selectedDropUnit,
                      selectedTapUnit,
                      payValue
                    ) || 0
                  )}
              </Currency>
            </Nation>
            <Date>
              <Title>기준일 : </Title>
              <SubTitle>{date}</SubTitle>
            </Date>
          </CurrencyResultBox>
        </CurrencyBottomBox>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 410px;
  height: 470px;
  border: 7px solid black;
`;
const CurrencyTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 350px;
  height: 70px;
  margin-top: 30px;
`;
const PayBox = styled.input`
  width: 200px;
  height: 50px;
  border: 4px solid black;
  font-size: 20px;
  text-align: center;
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;
const SelectBox = styled.form`
  display: flex;
  justify-content: flex-end;
  width: 100px;
  height: 25px;
  border: 4px solid black;
  &:focus {
    outline: none;
  }
`;
const Selected = styled.select`
  width: 100px;
  option {
    text-align: center;
  }
  &:focus {
    outline: none;
  }
`;
const CurrencyBottomBox = styled.div`
  width: 350px;
  height: 300px;
  margin-bottom: 30px;
  border: 4px solid black;
`;
const UnitTab = styled.ul`
  display: flex;
`;
const UnitListWrapper = styled.li`
  display: inline-block;
  width: 20%;
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
  border: 2px solid black;
  cursor: pointer;
  ${props =>
    props.active && 'border-bottom: 1px solid white; background-color: white'};
`;
const UnitListItem = styled.div``;

const CurrencyResultBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  margin: 35px 0 0 30px;
`;
const Nation = styled.div`
  display: flex;
`;
const Name = styled.h1`
  margin-right: 10px;
  font-size: 25px;
  font-weight: 700;
`;
const Currency = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;
const Date = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0 0 5px;
  font-weight: 700;
`;
const Title = styled.h4`
  margin-bottom: 5px;
  font-size: 15px;
`;
const SubTitle = styled.h4`
  font-size: 15px;
`;

export default SecondCalculator;
