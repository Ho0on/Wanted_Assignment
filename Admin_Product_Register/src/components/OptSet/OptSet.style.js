import styled, { css } from 'styled-components';

const btnStyle = css`
  padding: 5px 10px;
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

export const OptSetSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptSetBar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 50px;
  padding: 0 20px;
`;

export const DeleteBtn = styled.button`
  ${deleteBtnStyle}
`;

export const OptSetContent = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  border: solid 1px ${({ theme }) => theme.color.borderGray};
  border-radius: 10px;
  background-color: white;
`;

export const AddImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  border: solid 1px ${({ theme }) => theme.color.borderGray};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.backgroundGray};
`;

export const AddImgBtn = styled.button`
  ${btnStyle}
  padding: 10px 40px;
  background-color: ${({ theme }) => theme.color.backgroundGray};
`;

// export const OptBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 10px 0;
//   padding: 20px;
//   border-radius: 10px;
//   border: solid 1px ${({ theme }) => theme.color.borderGray};
//   background-color: white;
// `;

// export const OptBoxBar = styled.div`
//   display: flex;
//   justify-content: end;
//   align-items: center;
// `;

// export const OptBoxDeleteBtn = styled.button`
//   ${deleteBtnStyle}
//   margin-bottom: 10px;
// `;

// export const InputOptName = styled.input`
//   ${inputCommonStyle}
//   margin-bottom: 10px;
//   padding: 10px 20px;
//   border-radius: 5px;
// `;

// export const OptInfo = styled.div`
//   display: flex;
//   margin-bottom: 20px;
// `;

// export const NormalPriceSection = styled.div`
//   display: flex;
//   align-items: center;
// `;
// export const InputNormalPrice = styled.input`
//   ${smallInput}
//   width: 180px;
// `;

// export const DiscountSection = styled.div`
//   display: flex;
//   align-items: center;
// `;
// export const InputDiscountRate = styled.input`
//   ${smallInput}
//   width: 120px;
// `;

// export const SellingPriceSection = styled.div`
//   display: flex;
//   align-items: center;
// `;
// export const InputSellingPrice = styled.input`
//   ${smallInput}
//   width: 180px;
// `;

// export const StockSection = styled.div`
//   display: flex;
//   align-items: center;
// `;
// export const InputStock = styled.input`
//   ${smallInput}
//   width: 120px;
// `;

// export const TaxSection = styled.div``;

// export const TaxBtn = styled.button`
//   ${smallInput}
//   padding: 10px 20px;
//   background-color: white;
//   :hover {
//     cursor: pointer;
//   }
// `;

// export const AddOptBox = styled.div`
//   display: flex;
//   justify-content: start;
//   align-items: center;
// `;
// export const AddOptBoxBtn = styled.button`
//   ${btnStyle}
//   padding: 0px;
//   width: 25px;
//   height: 25px;
//   border: solid 1px ${({ theme }) => theme.color.borderGray};
//   background-color: white;
//   font-size: ${({ theme }) => theme.fontSize.large};
// `;

// export const AddOptBoxText = styled.div`
//   margin-left: 10px;
// `;

export const AddOptBtn = styled.button`
  ${btnStyle}
  width: 100%;
  padding: 20px;
  background-color: white;
`;
