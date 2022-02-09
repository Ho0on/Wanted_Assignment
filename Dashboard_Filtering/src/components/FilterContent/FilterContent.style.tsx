import styled from 'styled-components';

interface TitleWrapperType {
  title: string;
  isActive: boolean;
}

export const FilterContentContainer = styled.div`
  position: ${({ title }) => title === '재료' && 'relative'};
  left: ${({ title }) => title === '재료' && '10px'};
`;

export const TitleWrapper = styled.div<TitleWrapperType>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ title }) => (title === '재료' ? '76px' : '110px')};
  /* width: 98px; */
  height: 32px;
  padding: 4px 12px;
  border: ${({ isActive }) =>
    isActive ? '1px solid transparent' : '1px solid #939fa5'};
  border-radius: 4px;
  color: ${({ isActive }) => isActive && 'white'};
  background-color: ${({ isActive }) => isActive && '#1565C0'};
  cursor: pointer;

  &:hover {
    border: 1px solid #2196f3;
  }
`;

export const IconDown = styled.img`
  width: 14px;
  height: 14px;
`;

export const TitleActive = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
`;

export const TitleNonActive = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
`;

export const ListContainer = styled.div`
  position: relative;
`;

export const ListWrapper = styled.ul`
  position: absolute;
  top: 4px;
  width: 100px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  background-color: white;
  z-index: 100;
`;

export const FilterListContainer = styled.li``;

export const FilterItem = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckboxList = styled.input``;

export const ListItem = styled.div`
  padding: 2px 0 0 2px;
  font-size: 14px;
  line-height: 20px;
`;
