import React from 'react';

import { Request } from 'interface';
import * as S from './ReqCard.style';

const ReqCard = ({ item }: { item: Request }) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.Title>{item.title}</S.Title>
        {item.status === '상담중' && <S.Badge>상담중</S.Badge>}
        <S.Client>{item.client}</S.Client>
        <S.DueDate>{item.due} 까지 납기</S.DueDate>
      </S.TopWrapper>
      <S.InfoContainer>
        <S.Type>
          <S.Work>도면개수</S.Work>
          <S.Work>총 수량</S.Work>
          <S.Work>가공방식</S.Work>
          <S.Work>재료</S.Work>
        </S.Type>
        <S.Things>
          <S.Info>{item.count} 개</S.Info>
          <S.Info>{item.amount} 개</S.Info>
          <S.Info>{item.method.join(', ')}</S.Info>
          <S.Info>{item.material.join(', ')}</S.Info>
        </S.Things>
      </S.InfoContainer>
      <S.ButtonContainer>
        <S.List>요청 내역 보기</S.List>
        <S.Chat>채팅하기</S.Chat>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ReqCard;
