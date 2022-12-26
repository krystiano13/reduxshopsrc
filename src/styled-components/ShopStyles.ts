import styled from "styled-components";

export const ShopWrapper = styled.div`
  width: auto;
  height: auto;
  padding-top: 6vh;
  padding-bottom: 8vh;
  overflow: hidden;
  transform: translateY(11vh);
  background-color: whitesmoke;

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (orientation: portrait) {
    height: 350vh;
  }
`;

export const ShopItem = styled.div`
  display: block;
  width: 26vw;
  height: 65vh;
  margin-top: 4vh;
  background-color: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  animation : appear 350ms ease-in-out;

  cursor: pointer;
  transition: color 250ms, background-color 250ms;

  :hover {
    background-color: #108080;
    color: white;
  }

  @media screen and (orientation: portrait) {
    width: 80vw;
    height: 55vh;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const ShopImage = styled.img`
  width: 26vw;
  height: 55vh;
  background-color: white;

  @media screen and (orientation: portrait) {
    width: 80vw;
    height: 45vh;
  }
`;

export const ShopItemBaner = styled.div`
  width: 26vw;
  height: 10vh;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 80vw;
    height: 10vh;
  }
`;

export const ShopItemTitle = styled.h2`
  margin: 0;
  font-size: 2.2vh;
`;
