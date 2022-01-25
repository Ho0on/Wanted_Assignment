import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CURRENCY_OPTION = [
  { name: '미국(USD)', value: 'USD' },
  { name: '한국(KRW)', value: 'KRW' },
  { name: '홍콩(HDK)', value: 'HDK' },
  { name: '일본(JPY)', value: 'JPY' },
  { name: '캐나다(CAD)', value: 'CAD' },
  { name: '즁귝(CNY)', value: 'CNY' },
];

function SecondCalculator() {
  const [currencyData, setCurrencyData] = useState();
  const [selectCurrency, setSelectCurrency] = useState(0);
  const [payValue, setPayValue] = useState(0);
  const [selectedDropdown, setSelectedDropdown] = useState();
  const [selectedDropUnit, setSelectedDropUnit] = useState();

  const getData = async () => {
    const result = await (
      await fetch(process.env.REACT_APP_API_ADDRESS_SECOND)
    ).json();
    setCurrencyData(result.quotes);
    setSelectCurrency(result.quotes.USDKRW);
  };

  useEffect(() => {
    getData();
  }, []);

  const onClickBlank = () => {
    setPayValue('');
  };

  const changeInputValue = event => {
    setPayValue(event.target.value);
  };

  const handleDropmenu = e => {
    const { value } = e.target;
    setSelectedDropUnit(value.slice(-4, -1));
  };

  const newCurrencyOption = CURRENCY_OPTION.filter(
    el => el.value !== selectedDropUnit
  );

  return (
    <Wrapper>
      <Container>
        <CurrencyTopBox>
          <PayBox
            type="number"
            onClick={onClickBlank}
            onChange={changeInputValue}
            onBlur={() => setPayValue(0)}
            value={payValue > 1000 ? 1000 : payValue}
          />
          <SelectBox>
            <Selected onChange={handleDropmenu}>
              {CURRENCY_OPTION.map((el, idx) => {
                return <option key={idx}>{el.name}</option>;
              })}
            </Selected>
          </SelectBox>
        </CurrencyTopBox>
        <CurrencyBottomBox>
          <UnitTab>
            {newCurrencyOption.map((el, idx) => {
              return (
                <UnitListWrapper key={idx}>
                  <UnitListItem>{el.value}</UnitListItem>
                </UnitListWrapper>
              );
            })}
          </UnitTab>
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
  width: 150px;
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
  width: 150px;
  height: 50px;
  border: 4px solid black;
  &:focus {
    outline: none;
  }
`;
const Selected = styled.select`
  width: 200px;
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
  border: 1px black solid;
`;
const UnitListItem = styled.div``;

export default SecondCalculator;
