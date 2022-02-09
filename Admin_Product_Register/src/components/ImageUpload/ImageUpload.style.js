import styled from 'styled-components';

export const UploadContainer = styled.div`
  display: flex;
  padding: 15px;
`;

export const FileLabel = styled.label`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0px 50px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.color.darkPurple};
  background-color: white;
  cursor: pointer;
`;

export const InputImage = styled.input`
  display: none;
`;

export const ImgListView = styled.ul`
  margin-left: 40px;
  padding-top: 8px;
`;

export const ImgItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ItemName = styled.span`
  margin-right: 20px;
`;

export const RemoveBtn = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  border: 1px solid ${props => props.theme.color.borderGray};
  border-radius: 50%;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 4px;
    left: 11px;
    content: ' ';
    height: 15px;
    width: 1px;
    background-color: #000;
    transform: rotate(45deg);
  }
  &::after {
    position: absolute;
    content: ' ';
    top: 4px;
    left: 11px;
    height: 15px;
    width: 1px;
    background-color: #000;
    transform: rotate(-45deg);
  }
`;
