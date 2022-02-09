import styled, { css } from 'styled-components';

const btnStyle = css`
  padding: 5px 10px;
  border: solid 1px ${({ theme }) => theme.color.darkPurple};
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

export const ProOptSection = styled.div`
  margin: 40px 0;
`;

export const ProOptContentBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border: solid 1px ${({ theme }) => theme.color.borderGray};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ProOptBar = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ProOptBtn = styled.button`
  ${btnStyle}
  background-color: white;
`;

export const ProOptContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  border: solid 1px ${({ theme }) => theme.color.borderGray};
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({ theme }) => theme.color.backgroundGray};
`;

export const ProOptContentText = styled.div`
  height: 600px;
  padding-top: 180px;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
