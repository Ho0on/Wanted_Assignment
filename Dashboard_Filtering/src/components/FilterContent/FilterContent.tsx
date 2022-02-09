import React, { useState } from 'react';
import * as S from './FilterContent.style';

interface FilterContentProps {
  title: string;
  filterData: string[];
  isOpen: boolean;
  setIsOpen: any;
  checkedArray: string[];
  setCheckedArray: any;
}

const FilterContent: React.FC<FilterContentProps> = ({
  title,
  filterData,
  isOpen,
  setIsOpen,
  checkedArray,
  setCheckedArray,
}) => {
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onCheckedElement = (checked: boolean, item: string) => {
    const newCheckList = checked
      ? [...checkedArray, item]
      : checkedArray.filter(el => el !== item);
    setCheckedArray(newCheckList);
  };

  const isActive = checkedArray.length >= 1;

  return (
    <S.FilterContentContainer title={title}>
      <S.TitleWrapper onClick={handleOpen} title={title} isActive={isActive}>
        {!isActive ? (
          <>
            <S.TitleNonActive>{title}</S.TitleNonActive>
            <S.IconDown src="/images/triangle_down_gray.png" />
          </>
        ) : (
          <>
            <S.TitleActive>
              {title}({checkedArray.length})
            </S.TitleActive>
            <S.IconDown src="/images/triangle_down_white.png" />
          </>
        )}
      </S.TitleWrapper>
      {isOpen && (
        <S.ListContainer>
          <S.ListWrapper>
            {filterData.map((el: string, idx: number): any => (
              <S.FilterListContainer key={idx}>
                <S.FilterItem>
                  <S.CheckboxList
                    type="checkbox"
                    checked={checkedArray.includes(el) ? true : false}
                    onChange={e => onCheckedElement(e.target.checked, el)}
                  />
                  <S.ListItem>{el}</S.ListItem>
                </S.FilterItem>
              </S.FilterListContainer>
            ))}
          </S.ListWrapper>
        </S.ListContainer>
      )}
    </S.FilterContentContainer>
  );
};

export default FilterContent;
