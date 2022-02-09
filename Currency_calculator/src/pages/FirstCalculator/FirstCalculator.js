import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formatingNumber } from '../../utils';

const NATION_OPTION = [
  { name: '한국(KRW)', value: 'USDKRW' },
  { name: '일본(JPY)', value: 'USDJPY' },
  { name: '필리핀(PHP)', value: 'USDPHP' },
];

function FirstCalculator() {
  const [currencyData, setCurrencyData] = useState();
  const [selectCurrency, setSelectCurrency] = useState(0);
  const [currencyUnit, setCurrencyUnit] = useState('KRW');
  const [moneyInput, setMoneyInput] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [result, setResult] = useState(0);

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
    setCurrencyUnit(value.slice(3));
    setIsVisible(false);
  };

  const handleMoneyInput = e => {
    const { value } = e.target;
    if (value < 0 || value > 10000) {
      alert('송금액이 바르지 않습니다.');
      setMoneyInput(0);
    } else {
      setMoneyInput(value);
    }
  };

  const openResultBox = () => {
    setIsVisible(true);
    setResult(moneyInput * selectCurrency);
  };

  return (
    <Container>
      <HeadTitle>환율 계산</HeadTitle>
      <Content>송금국가 : 미국(USD)</Content>
      <Content>
        수취국가 :&nbsp;
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
        환율 :&nbsp;
        {selectCurrency &&
          `${formatingNumber(selectCurrency)} ${currencyUnit}/USD`}
      </Content>
      <Content>
        송금액 :&nbsp;
        <MoneyInput
          type="number"
          value={moneyInput}
          onInput={handleMoneyInput}
        />
        USD
      </Content>
      <SubmitBtn onClick={openResultBox}>Submit</SubmitBtn>
      {isVisible && (
        <ResultBox>
          수취금액은 {`${formatingNumber(result)} ${currencyUnit}`} 입니다.
        </ResultBox>
      )}
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

const ResultBox = styled.div`
  position: relative;
  top: 30px;
  font-size: 1.1em;
`;
