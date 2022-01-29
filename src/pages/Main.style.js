import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 1200px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 20px;
`;

export const SideBar = styled.div`
  width: 200px;
  border-right: 1px solid ${props => props.theme.color.borderGray}; ;
`;

export const LogoWrap = styled.div`
  width: 100%;
  height: 60px;
  padding: 15px 20px;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
`;
export const LogoImg = styled.img`
  width: 100px;
  object-fit: contain;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MenuListItem = styled.li`
  padding: 15px 20px;
  background-color: ${props => (props.isActive ? '#D6D5E2' : null)};
  color: ${props => (props.isActive ? props.theme.color.darkPurple : null)};
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
`;

export const MainWrap = styled.div`
  width: 1000px;
`;

export const Header = styled.div`
  width: 100%;
  height: 107px;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
`;

export const Blank = styled.div`
  height: 60px;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
  padding-left: 20px;
  font-weight: ${props => props.theme.fontWeight.bold}; ;
`;

export const ContentWrap = styled.div`
  padding: 20px;
`;
