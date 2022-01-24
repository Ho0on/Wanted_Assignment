import react from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Main() {
  return (
    <MainContainer>
      <Link to="/firstcalculator">
        <BoxWrapper idx={1}>
          <CalculatorBox>First Currency Calculator</CalculatorBox>
        </BoxWrapper>
      </Link>
      <Link to="/secondcalculator">
        <BoxWrapper idx={2}>
          <CalculatorBox>Second Currency Calculator</CalculatorBox>
        </BoxWrapper>
      </Link>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  margin-bottom: 100px;
  border-radius: 25px;
  background-color: ${props => (props.idx === 1 ? '#c58f69' : '#9B9740')};
`;

const CalculatorBox = styled.text`
  font-size: 20px;
  font-weight: bold;
`;
