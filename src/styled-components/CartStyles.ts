import styled from "styled-components";

export const CartWrapper = styled.div`
  width: auto;
  height: 89vh;
  transform: translateY(11vh);
  background-color: whitesmoke;

  animation: appear 350ms ease-in-out;

  display: flex;
  align-items: center;

  @media screen and (orientation: portrait) {
    flex-direction: column;
    align-items: center;
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

export const SquareButton = styled.button`
  font-size: 1.8vh;
  font-weight: 700;
  color: black;
  background-color: white;
  width: 25%;
  height: 70%;
  border: none;
  cursor: pointer;

  @media screen and (orientation: portrait) {
    font-size: 1.4vh;
    height: 75%;
  }
`;

export const ListLabel = styled.label`
  display: block;
  font-size: 2vh;
  color: white;
  font-weight: 500;
`;

export const CartLeft = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 100%;
    height: 65%;
  }
`;

export const CartRight = styled.div`
  width: 50%;
  height: auto;

  @media screen and (orientation: portrait) {
    width: 100%;
  }
`;

export const CartRightFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media screen and (orientation: portrait) {
    transform: translateX(10%);
  }
`;

export const CartRightTitle = styled.h2`
  color: black;
  font-weight: 400;
  font-size: 2.5vh;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

export const Underline = styled.hr`
  width: 80%;
  transform: translateX(-13%);

  @media screen and (orientation: portrait) {
    transform: translateX(-3%);
  }
`;

export const CartRightButton = styled.button`
  width: 80%;
  height: 20%;
  background-color: #128282;
  color: white;
  font-size: 2.25vh;
  padding: 0.5vh;
  border: none;
  margin-top: 1vh;

  cursor: pointer;

  transition: background-color 250ms;
  will-change: background-color;

  :hover {
    background-color: #159090;
  }

  @media screen and (orientation: portrait) {
    transform: translateX(10%);
  }
`;

export const CartList = styled.div`
  width: 60%;
  height: 90%;

  @media screen and (orientation: portrait) {
    width: 80%;
    overflow-y: scroll;
  }
`;

export const CartListContent = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 2vh;
`;

type ListElementProps = {
  id: string;
};

export const ListElement = styled.div<ListElementProps>`
  width: 100%;
  height: 12vh;
  margin-top: 4vh;

  display: flex;
  align-items: center;

  @media screen and (orientation: portrait) {
    height: 8vh;
  }
`;

type ListLeftProps = {
  src: string;
};

export const ListLeft = styled.div<ListLeftProps>`
  width: 35%;
  height: 100%;

  background-image: url(${({ src }) => src});
  background-size: 125%;
  background-repeat: no-repeat;
  background-position: center right;

  border: solid #128282 0.25vh;
`;

export const Section = styled.section`
  width: 78%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 80%;
    height: 125%;
  }
`;

export const CountSection = styled.section`
  width: 50%;
  height: 50%;
  background-color: #128282;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (orientation: portrait) {
    height: 70%;
  }
`;

export const ListRight = styled.div`
  width: 65%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 2vh;
`;

export const ListTitle = styled.h2`
  margin: 0;
  color: black;
  font-weight: 500;
  font-size: 2vh;

  @media screen and (orientation: portrait) {
    font-size: 1.6vh;
  }
`;

export const ListSubtitle = styled.h2`
  margin: 0;
  color: black;
  font-weight: 400;
  font-size: 1.6vh;

  @media screen and (orientation: portrait) {
    font-size: 1.5vh;
  }
`;

export const ListButton = styled.button`
  color: white;
  background-color: #128282;
  width: 40%;
  height: 50%;
  font-size: 1.6vh;
  border: none;
  cursor: pointer;
  font-weight: 500;

  @media screen and (orientation: portrait) {
    height: 70%;
    width: 45%;
    transform: translateX(12%);
  }

  transition: background-color 250ms;

  :hover {
    background-color: #139090;
  }
`;
