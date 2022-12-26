import styled from "styled-components";

export const ItemWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    position: fixed;
    z-index : 1001;
    background-color: rgba(20,20,20,0.97);

    display: flex;
    justify-content: center;
    align-items: center;

    animation : appear 250ms;

    @keyframes appear {
      from {
        opacity : 0;
      }

      to {
        opacity : 1;
      }
    }
`;

export const Item = styled.div`
  width: 60vw;
  height: 65vh;
  background-color: whitesmoke;

  display: flex;
  border-radius: 10vh;

  @media screen and (orientation : portrait) {
    width : 90vw;
    height : 35vh;
    border-radius : 5vh;
  }
`;

export const ItemInfo = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type ItemImgProps = {
    src: string
}

export const ItemImg = styled.div<ItemImgProps>`
  width: 100%;
  height: 85%;
  background-color: red;
  background-image: url(${({ src }) => src});
  background-size: 110%;
  background-position: center;
  border-top-left-radius: 10vh;

  @media screen and (orientation : portrait){
    background-size: 145%;
    border-top-left-radius: 5vh;
  }
`;

export const ItemText = styled.div`
  width: 100%;
  height: 15%;
  background-color: #128282;

  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom-left-radius: 10vh;

  @media screen and (orientation: portrait) {
    border-bottom-left-radius: 0vh;
  }
`;

export const ItemName = styled.h2`
  color: white;
  font-size: 2.5vh;
  margin: 0;

  @media screen and (orientation: portrait) {
    font-size: 1.6vh;
    padding: 1vw;
  }
`;

export const ItemForm = styled.form`
  width: 50%;
  height: 100%;
  border-top-right-radius: 10vh;
  border-bottom-right-radius: 10vh;

  @media screen and (orientation: portrait) {
    border-top-right-radius: 5vh;
    border-bottom-right-radius: 5vh;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const InputWrap = styled.div`
  margin-top : 10vh;
  display : flex;
  width : 70%;
  height : 10%;
`;

export const NumButton = styled.button`
  color : white;
  background-color: #128282;
  width : 15%;
  box-sizing: border-box;
  border : none;
  margin-left : 0.25vh;
  font-size : 3vh;
  cursor : pointer;

  @media screen and (orientation : portrait) {
    font-size : 2vh
  }
  
  transition : background-color 250ms;
  will-change : background-color;

  :hover {
    background-color: #139090;
  }
`;

export const ItemInput = styled.input`
  box-sizing: border-box;
  width: 70%;
  height: 100%;
  border: solid black 1px;
  font-size: 2vh;
  text-align: center;
  overflow-y: hidden;
`;

export const TotalPrice = styled.h2`
  font-size: 3.25vh;
  color: black;
  margin: 0;

  @media screen and (orientation: portrait) {
    font-size: 1.8vh;
  }
`;

export const FormButton = styled.button`
  width: 70%;
  height: 10%;
  background-color: #128282;
  color: white;
  border: none;
  cursor: pointer;

  font-size: 2.4vh;

  @media screen and (orientation: portrait) {
    font-size: 2vh;
  }

  transition: background-color 250ms;
  will-change: background-color;

  :hover {
    background-color: #139090;
  }
`;

export const MarginBot = styled.div`
  margin-bottom: 0vh;
`;