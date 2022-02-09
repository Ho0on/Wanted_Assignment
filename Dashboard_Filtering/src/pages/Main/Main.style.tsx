import styled from 'styled-components';

interface ReqWrapperType {
  isActive: boolean;
}

export const FilteringContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  @media ${props => props.theme.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const FilteringBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ResetWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  position: relative;
  left: 20px;
  width: 90px;
  height: 32px;
  padding: 8px 0;
  cursor: pointer;
`;

export const ResetIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const ResetText = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #2196f3;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 32px;

  @media ${props => props.theme.mobile} {
    margin-top: 20px;
  }
`;

export const InputWrapper = styled.label`
  position: relative;
  display: block;
  width: 40px;
`;

export const ToggleText = styled.div`
  position: relative;
  top: 2px;
  padding-left: 16px;
  font-size: 14px;
  line-height: 20px;
`;

export const Switch = styled.span`
  position: absolute;
  top: 4px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 17px;
  border-radius: 20px;
  background-color: #c2c2c2;
  transition: 0.4s;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    transition: 0.4s;
  }
`;

export const InputCheck = styled.input`
  width: 40px;
  height: 17px;
  opacity: 0;

  &:checked + ${Switch} {
    background-color: #bbdefb;
    transition: 0.4s;

    &::before {
      background-color: #2196f3;
      transform: translateX(18px);
      transition: 0.4s;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1130px;
  margin: 0 auto;
  padding: 40px 20px;

  @media ${props => props.theme.mobile} {
    margin: 0 auto;
    padding: 24px 20px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  padding: 8px 0px;
`;

export const HeaderDesc = styled.h3`
  font-size: ${props => props.theme.fontSize.small};
  margin-bottom: 32px;
`;

export const ReqWrapper = styled.div<ReqWrapperType>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 0px;
  width: 100%;
  border: 1px solid
    ${props => (!props.isActive ? 'white' : props.theme.color.gray)};
  border-radius: 4px;
  color: ${props => props.theme.color.gray};
  box-sizing: border-box;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  width: 100%;
`;
export const Card = styled.div`
  width: 360px;
  height: 356px;
  margin: 7px;
  border: 1px solid gray;
  border-radius: 4px;

  @media ${props => props.theme.mobile} {
    margin: 0;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span``;
