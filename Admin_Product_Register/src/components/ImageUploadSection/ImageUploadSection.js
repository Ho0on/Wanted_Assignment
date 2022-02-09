import React from 'react';

import { ImageUpload } from '../ImageUpload/ImageUpload';
import * as S from './ImageUploadSection.style';

export const ImageUploadSection = ({ title }) => {
  return (
    <S.Container>
      <S.Header>{title}</S.Header>
      <S.ContentBox>
        <ImageUpload />
      </S.ContentBox>
    </S.Container>
  );
};
