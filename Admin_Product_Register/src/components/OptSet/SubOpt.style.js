import styled, { css } from 'styled-components';

const inputStyle = css`
  border: solid 1px ${({ theme }) => theme.color.borderGray};
  border-radius: 5px;
  background-color: white;
  padding: 10px 10px;
  text-align: start;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const btnStyle = css`
  padding: 8px 10px;
  border: solid 1px ${({ theme }) => theme.color.darkPurple};
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

const deleteBtnStyle = css`
  ${btnStyle}
  border: solid 1px ${({ theme }) => theme.color.red};
  background-color: white;
  color: ${({ theme }) => theme.color.red};
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Line = styled.div`
  color: ${({ theme }) => theme.color.gray};
  font-size: 30px;
`;

export const AddOptName = styled.input`
  ${inputStyle}
`;

export const AddOptPriceSection = styled.div``;

export const AddOptPrice = styled.input`
  ${inputStyle}
  margin-right: 5px;
`;

export const OptBoxDeleteBtn = styled.div`
  ${deleteBtnStyle}
`;
