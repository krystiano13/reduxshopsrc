import React from "react";
import { Field, Form } from "react-final-form";
import {
  ItemWrapper,
  Item,
  ItemInfo,
  ItemImg,
  ItemText,
  ItemName,
  ItemForm,
  ItemInput,
  InputWrap,
  NumButton,
  TotalPrice,
  FormButton,
  MarginBot,
} from "../styled-components/ItemStyles";

import { useDispatch } from "react-redux";
import addToCart from "../actions/addToCart";
import { Catalog } from "../reducers/reducer";

interface Item {
  hideForm: () => void;
  item: Catalog | undefined;
}

const ItemPopUp: React.FC<Item> = ({ hideForm, item }) => {
  const [inputValue, setInputValue] = React.useState<number>(1);
  const dispatch = useDispatch();
  const change = (operation: string): void => {
    let val: number = inputValue;
    if (operation === "substract") {
      if (val > 1) {
        val--;
        setInputValue(val);
        return;
      }
    } else if (operation === "add") {
      val++;
      setInputValue(val);
      return;
    }
  };
  return (
    <ItemWrapper>
      <Item>
        <ItemInfo>
          <ItemImg src={item!.imgSrc} />
          <ItemText>
            <ItemName>{item!.name}</ItemName>
            <ItemName>{item!.price}$</ItemName>
          </ItemText>
        </ItemInfo>
        <ItemForm>
          <InputWrap>
            <ItemInput type={"text"} placeholder="amount" value={inputValue} />
            <NumButton type="button" onClick={() => change("substract")}>
              -
            </NumButton>
            <NumButton type="button" onClick={() => change("add")}>
              +
            </NumButton>
          </InputWrap>
          <TotalPrice>
            Total Price: {(item!.price * inputValue).toFixed(2)}$
          </TotalPrice>
          <FormButton
            onClick={() => {
              dispatch(
                addToCart(
                  Math.random(),
                  item!.name,
                  item!.price,
                  inputValue,
                  item!.price * inputValue,
                  item!.imgSrc
                )
              );
              hideForm();
            }}
          >
            Add To Cart
          </FormButton>
          <FormButton onClick={hideForm}>Cancel</FormButton>
          <MarginBot />
        </ItemForm>
      </Item>
    </ItemWrapper>
  );
};

export default ItemPopUp;
