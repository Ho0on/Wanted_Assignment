import React from 'react';
import * as S from './SubOpt.style';

function SubOpt({ handleMinusSubOpt }) {
  return (
    <S.Section>
      <S.Line>ㄴ</S.Line>
      <S.AddOptName type="text" size="40" placeholder="추가 옵션명 (필수)" />
      <S.AddOptPriceSection>
        <S.AddOptPrice
          type="text"
          size="30"
          placeholder="추가 옵션 정상가 (필수)"
        />
        원
      </S.AddOptPriceSection>
      <S.OptBoxDeleteBtn onClick={handleMinusSubOpt}>삭제</S.OptBoxDeleteBtn>
    </S.Section>
  );
}

export default SubOpt;
