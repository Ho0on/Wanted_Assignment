import React, { useState } from 'react';

import * as S from './ImageUpload.style';

export const ImageUpload = ({ isThumbnail }) => {
  const [files, setFiles] = useState([]);

  const onChangeFiles = e => {
    const selectFiles = e.target.files;
    let tempFiles = files;
    for (const file of selectFiles) {
      !isThumbnail ? (tempFiles = [...tempFiles, file]) : (tempFiles = [file]);
    }
    setFiles(tempFiles);
  };

  const removeFile = idx => {
    setFiles(files.filter((el, index) => index !== idx));
  };

  return (
    <S.UploadContainer>
      <S.FileLabel>
        <S.InputImage
          type="file"
          onChange={onChangeFiles}
          multiple={!isThumbnail}
        />
        + 이미지 첨부
      </S.FileLabel>
      <S.ImgListView>
        {files &&
          files.map((el, idx) => {
            return (
              <S.ImgItem key={idx}>
                <S.ItemName>{el.name}</S.ItemName>
                <S.RemoveBtn onClick={() => removeFile(idx)} />
              </S.ImgItem>
            );
          })}
      </S.ImgListView>
    </S.UploadContainer>
  );
};
