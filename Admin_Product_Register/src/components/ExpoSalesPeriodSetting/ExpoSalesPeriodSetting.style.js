import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  margin-bottom: 40px;
`;

export const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
  padding: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ExposurePeriodWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
  display: flex;
`;

export const SubTitle = styled.div`
  border-right: 1px solid ${({ theme }) => theme.color.borderGray};
  padding: 20px;
  width: 150px;
  background: ${({ theme }) => theme.color.backgroundLightGray};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const RadioInputWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const InputText = styled.span`
  height: 10px;
`;

export const DateRangePicker = styled.div`
  display: flex;
  align-items: center;
`;

export const TilderWrapper = styled.div`
  margin: 0 10px;
`;

export const SalesPeriodWrapper = styled.div`
  display: flex;
`;
