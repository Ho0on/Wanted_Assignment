import styled from 'styled-components';

export const SwitchWrapper = styled.div`
  padding: 15px;
`;

export const CheckLabel = styled.label`
  position: relative;
  display: block;
  width: 40px;
`;

export const Switch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 4px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 17px;
  background-color: #9f9f9f;
  border-radius: 20px;
  transition: 0.4s;

  &::before {
    content: '';
    position: absolute;
    width: 23px;
    height: 23px;
    top: -3px;
    border-radius: 50%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    background-color: white;
    transition: 0.4s;
  }
`;

export const InputCheck = styled.input`
  opacity: 0;
  width: 40px;
  height: 17px;

  &:checked + ${Switch} {
    background-color: ${props => props.theme.color.lightPurple};
    transition: 0.4s;

    &::before {
      background-color: #2919be;
      transform: translateX(18px);
      transition: 0.4s;
    }
  }
`;
