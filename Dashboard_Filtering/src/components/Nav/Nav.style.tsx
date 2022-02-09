import styled from 'styled-components';

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 40px;
  background-color: ${props => props.theme.color.blue};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  z-index: 1000;

  @media ${props => props.theme.mobile} {
    justify-content: flex-start;
    padding: 16px 23px;
  }
`;

export const Logo = styled.img`
  width: 153px;

  @media ${props => props.theme.mobile} {
    width: 100px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const HamburgerIcon = styled.i`
  display: none;
  color: white;
  font-size: 16px;
  margin-right: 18px;
  cursor: pointer;

  @media ${props => props.theme.mobile} {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
  font-weight: ${props => props.theme.fontWeight.normal};

  @media ${props => props.theme.mobile} {
    display: none;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 16px;
  margin-right: 8px;
`;

export const Border = styled.span`
  height: 16px;
  margin: 0px 32px;
  border-right: 2px solid white;
`;

export const SideMenu = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: -280px;
  background-color: white;
  width: 280px;
  height: 100%;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  z-index: 2000;
  transform: ${props => (props.active ? 'translateX(280px)' : null)};
  transition: all 0.4s ease-in-out;
`;

export const SideLogo = styled.div`
  width: 100px;
  margin: 16px 20px;
`;

export const SideMenuList = styled.ul`
  border-top: 1px solid #dbdbdb;
  padding: 36px 32px;

  ${NavItem}:nth-child(1) {
    margin-bottom: 20px;
  }
`;

export const Mask = styled.div<{ active: boolean }>`
  display: ${props => (props.active ? null : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  z-index: 5;
  overflow: hidden;
`;
