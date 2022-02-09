// 상품옵션(prod-option)  - 10 11 12 (이미지 추가 및 삭제 + 항목 추가 및 삭제)
import React, { useState } from 'react';
import * as S from './ProdOption.style';
import OptSet from '../OptSet/OptSet';

function ProdOption() {
  const [optionSetNumber, setOptionSetNumber] = useState(0);

  const optSetDeleteBtn = () => {
    setOptionSetNumber(prev => prev - 1);
  };
  const openList = () => {
    setOptionSetNumber(prev => prev + 1);
  };

  return (
    <S.ProOptSection>
      <S.ProOptContentBar>
        <S.ProOptBar>상품 옵션 *</S.ProOptBar>
        <S.ProOptBtn onClick={openList}>+ 옵션 세트 추가</S.ProOptBtn>
      </S.ProOptContentBar>
      <S.ProOptContent>
        {optionSetNumber === 0 ? (
          <S.ProOptContentText>
            옵션세트를 추가하여 옵션을 구성해 주세요.
          </S.ProOptContentText>
        ) : (
          [...Array(optionSetNumber)].map((el, idx) => (
            <OptSet key={idx} optSetDeleteBtn={optSetDeleteBtn} />
          ))
        )}
      </S.ProOptContent>
    </S.ProOptSection>
  );
}

export default ProdOption;
