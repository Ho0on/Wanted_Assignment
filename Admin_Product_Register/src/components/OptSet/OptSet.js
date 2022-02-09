import React, { useState } from 'react';
import OptBox from '../OptBox/OptBox';
import * as S from './OptSet.style';

function OptSet({ optSetDeleteBtn, id }) {
  const [optBoxNumber, setOptBoxNumber] = useState(1);

  const handlePlusOptBox = () => {
    setOptBoxNumber(prev => prev + 1);
  };

  const handleMinusOptBox = () => {
    setOptBoxNumber(prev => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <S.OptSetSection>
      <S.OptSetBar>
        <S.DeleteBtn onClick={() => optSetDeleteBtn(id)}>삭제</S.DeleteBtn>
      </S.OptSetBar>
      <S.OptSetContent>
        <S.AddImgBox>
          <S.AddImgBtn>+ 이미지 첨부</S.AddImgBtn>
        </S.AddImgBox>
        {[...Array(optBoxNumber)].map((el, idx) => (
          <OptBox key={idx} handleMinusOptBox={handleMinusOptBox} />
        ))}
        <S.AddOptBtn onClick={handlePlusOptBox}>+ 옵션 추가</S.AddOptBtn>
      </S.OptSetContent>
    </S.OptSetSection>
  );
}

export default OptSet;
