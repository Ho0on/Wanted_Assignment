import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { numberFormat } from '../../utils';

const NATION_OPTION = [
  { name: '한국(KRW)', value: 'USDKRW' },
  { name: '일본(JPY)', value: 'USDJPY' },
  { name: '필리핀(PHP)', value: 'USDPHP' },
];

function FirstCalculator() {
  const [currencyData, setCurrencyData] = useState();
  const [selectCurrency, setSelectCurrency] = useState();
  const [currencyUnit, setCurrencyUnit] = useState('KRW');

  const getData = async () => {
    const result = await (
      await fetch(process.env.REACT_APP_API_ADDRESS)
    ).json();
    setCurrencyData(result.quotes);
    setSelectCurrency(result.quotes.USDKRW);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSelectBox = e => {
    const { value } = e.target;
    setSelectCurrency(currencyData[value]);
    setCurrencyUnit(value.slice(3, 6));
  };

  return (
    <Container>
      <HeadTitle>환율 계산</HeadTitle>
      <Content>송금국가: 미국(USD)</Content>
      <Content>
        수취국가:&nbsp;
        <SelectBox onChange={handleSelectBox}>
          {NATION_OPTION.map((el, idx) => {
            return (
              <SelectItem key={idx} value={el.value}>
                {el.name}
              </SelectItem>
            );
          })}
        </SelectBox>
      </Content>
      <Content>
        환율:
        {selectCurrency &&
          `${numberFormat(selectCurrency)} ${currencyUnit}/USD`}
      </Content>
      <Content>
        송금액: <MoneyInput type="number" /> USD
      </Content>
      <SubmitBtn>Submit</SubmitBtn>
    </Container>
  );
}

export default FirstCalculator;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

const HeadTitle = styled.h1`
  margin: 20px 0px;
  font-size: 36px;
  font-weight: bold;
`;

const Content = styled.p`
  padding: 3px 0;
`;

const SelectBox = styled.select``;

const SelectItem = styled.option``;

const MoneyInput = styled.input``;

const SubmitBtn = styled.button`
  width: 100px;
  margin: 5px;
  padding: 5px;
`;
