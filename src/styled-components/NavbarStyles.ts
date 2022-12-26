import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  width: 100vw;
  height: 11vh;
  z-index: 1000;
  background-color: whitesmoke;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position : fixed;

`;

export const NavTitle = styled.h1`
  font-size: 3.6vh;
  font-weight: 500;
  color: black;
  margin: 0;
  text-transform: capitalize;
  color: #128282;
  padding: 3vh;

  cursor : pointer;

  @media screen and (orientation : portrait){
    padding : 2vh;
  }
`;

export const BiggerSpan = styled.span`
  font-weight : 700;
  color : #333333;
`;

export const NavCartButton = styled.button`
  font-size : 2.5vh;
  color : black;
  cursor : pointer;
  background-color: transparent;
  border : none;
  margin : 3vh;

  display : flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (orientation : portrait) {
    margin : 2vh;
  }
`;

export const NavCartImage = styled.img`
  height : 5.5vh;
`;

