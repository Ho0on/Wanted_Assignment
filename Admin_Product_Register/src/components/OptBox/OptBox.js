import React, { useState } from 'react';
import SubOpt from '../SubOpt/SubOpt';
import * as S from './OptBox.style';

function OptBox({ handleMinusOptBox }) {
  const [subOptNumber, setSubOptNumber] = useState(0);

  const handlePlusSubOpt = () => {
    setSubOptNumber(prev => prev + 1);
  };
  const handleMinusSubOpt = () => {
    setSubOptNumber(prev => prev - 1);
  };

  return (
    <S.OptBox>
      <S.OptBoxBar>
        <S.OptBoxDeleteBtn onClick={handleMinusOptBox}>삭제</S.OptBoxDeleteBtn>
      </S.OptBoxBar>
      <S.InputOptName
        type="text"
        placeholder="옵션명을 입력해 주세요. (필수)"
      />
      <S.OptInfo>
        <S.NormalPriceSection>
          <S.InputNormalPrice type="text" placeholder="상품 정상가 (필수)" />원
        </S.NormalPriceSection>
        <S.DiscountSection>
          <S.InputDiscountRate placeholder="할인율" />%
        </S.DiscountSection>
        <S.SellingPriceSection>
          <S.InputSellingPrice type="text" placeholder="상품 판매가 (필수)" />원
        </S.SellingPriceSection>
        <S.StockSection>
          <S.InputStock type="text" placeholder="재고 (필수)" />개
        </S.StockSection>
        <S.TaxSection>
          <S.TaxBtn>비과세</S.TaxBtn>
        </S.TaxSection>
      </S.OptInfo>
      {[...Array(subOptNumber)].map((el, idx) => (
        <SubOpt key={idx} handleMinusSubOpt={handleMinusSubOpt} />
      ))}
      <S.AddOptBox onClick={handlePlusSubOpt}>
        <S.AddOptBoxBtn>+</S.AddOptBoxBtn>
        <S.AddOptBoxText>추가 옵션 상품 추가</S.AddOptBoxText>
      </S.AddOptBox>
    </S.OptBox>
  );
}

export default OptBox;
