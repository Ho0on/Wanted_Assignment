import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
  border: 1px solid ${props => props.theme.color.borderGray};
`;

export const Header = styled.h1`
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  font-weight: ${props => props.theme.fontWeight.bold};
  padding: 15px;
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const SubTitle = styled.h1`
  height: 100%;
  padding: 25px 30px 0px 15px;
  border-right: 1px solid #cfcfcf;
  background-color: #fbfbfb;
`;

export const Content = styled.div`
  padding-left: 20px;
`;
