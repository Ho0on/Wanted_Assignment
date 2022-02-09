import React from 'react';

import * as S from './Toggle.style';

export const ToggleBtn = ({ onChange, value, checked }) => {
  const handleCheckBox = e => {
    const { checked } = e.target;
    onChange(checked);
  };

  return (
    <S.SwitchWrapper>
      <S.CheckLabel>
        <S.InputCheck
          type="checkbox"
          onChange={handleCheckBox}
          value={value}
          checked={checked}
        />
        <S.Switch />
      </S.CheckLabel>
    </S.SwitchWrapper>
  );
};
