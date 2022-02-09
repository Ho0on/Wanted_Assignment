import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 355px;
  height: 356px;
  margin: 9px;
  border: 1px solid ${props => props.theme.color.lightGray};
`;

export const TopWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 35%;
  border-bottom: 1px solid ${props => props.theme.color.lightGray};
`;

export const Title = styled.h2`
  margin: 20px 0 10px 0;
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.bold};
  box-sizing: border-box;
  color: #323d45;
`;

export const Badge = styled.span`
  position: absolute;
  top: 30px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  color: #ffbe50;
  border: 2px solid #ffbe50;
  border-radius: 20px;
  font-size: 13px;
`;

export const Client = styled.h4`
  margin-bottom: 25px;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.normal};
  box-sizing: border-box;
  color: #323d45;
`;

export const DueDate = styled.h2`
  color: ${props => props.theme.color.gray};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.thin};
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 90%;
  margin-top: 30px;
  line-height: 30px;
`;

export const Type = styled.div``;

export const Things = styled.div`
  margin-left: 45px;
`;

export const Work = styled.h2`
  color: #323d45;
  font-weight: ${props => props.theme.fontWeight.thin};
`;

export const Info = styled.h2`
  color: #323d45;
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  margin-top: 20px;
`;

export const List = styled.button`
  width: 108px;
  height: 32px;
  background: ${props => props.theme.color.lightBlue};
  color: white;
  border: none;
  border-radius: 5px;
`;

export const Chat = styled.button`
  width: 82px;
  height: 32px;
  margin-left: 10px;
  background: none;
  color: ${props => props.theme.color.lightBlue};
  border: 1px solid ${props => props.theme.color.lightBlue};
  border-radius: 5px;
`;
