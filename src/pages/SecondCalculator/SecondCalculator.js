import React, { useState } from 'react';
import styled from 'styled-components';

function SecondCalculator() {
  const [payValue, setPayValue] = useState(0);

  const onClickBlank = () => {
    setPayValue('');
  };
  const changeInputValue = event => {
    setPayValue(event.target.value);
  };
  return (
    <Wrapper>
      <Container>
        <CurrencyTopBox>
          <PayBox
            type={'number'}
            onClick={onClickBlank}
            onChange={changeInputValue}
            onBlur={() => setPayValue(0)}
            value={payValue > 1000 ? 1000 : payValue}
          />

          <details>
            <summary>Click</summary>
            <p>123</p>
          </details>
        </CurrencyTopBox>
        <CurrencyBottomBox></CurrencyBottomBox>
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
  width: 160px;
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
const SelectBox = styled.input`
  width: 150px;
  height: 45px;
  border: 4px solid black;
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
export default SecondCalculator;
