import React, { useState } from 'react';

import * as S from './ToggleSetting.style';
import { ToggleBtn } from '../ToggleSwitch/ToggleBtn';

export const ToggleSetting = ({ title, content }) => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleToggle = isActive => {
    setIsToggleOn(isActive);
  };

  return (
    <S.Container>
      <S.Header>{title}</S.Header>
      <S.ContentBox>
        <S.SubTitle>{content}</S.SubTitle>
        <S.Content>
          <ToggleBtn onChange={handleToggle} />
        </S.Content>
      </S.ContentBox>
    </S.Container>
  );
};
