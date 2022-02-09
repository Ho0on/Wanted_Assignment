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
  padding: 10px;
`;
