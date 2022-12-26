import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import rtx2070 from "../images/2070.jpg";
import { Item, stateType } from "../reducers/reducer";
import {
  CartWrapper,
  CartLeft,
  CartList,
  CartListContent,
  ListElement,
  ListLeft,
  ListRight,
  ListTitle,
  ListSubtitle,
  ListButton,
  CartRight,
  CartRightTitle,
  Underline,
  CartRightFlex,
  CartRightButton,
  SquareButton,
  Section,
  ListLabel,
  CountSection,
} from "../styled-components/CartStyles";
import removeFromCart from "../actions/removeFromCart";
import add from "../actions/add";
import substract from "../actions/substract";

interface CartInterface {
  seed: number;
  seedChange: () => void;
}

const Cart: React.FC<CartInterface> = ({ seed, seedChange }) => {
  const cart = useSelector<stateType, stateType["items"]>(
    (state) => state.items
  );

  const empty = useSelector<stateType, stateType["empty"]>(
    (state) => state.empty
  );

  const totalPrice = useSelector<stateType, stateType["totalPrice"]>(
    (state) => state.totalPrice
  );

  const dispatch = useDispatch();
  return (
    <CartWrapper id={seed.toString()}>
      <CartLeft>
        <CartList>
          <CartListContent>
            {cart.map((item) => (
              <ListElement id={item.id.toString()}>
                <ListLeft src={item.imgSrc} />
                <ListRight>
                  <ListTitle>{item.name}</ListTitle>
                  <ListSubtitle id={seed.toString()}>
                    Total Price : {item.price2.toFixed(2)}$
                  </ListSubtitle>
                  <Section>
                    <CountSection>
                      <SquareButton
                        onClick={() => {
                          dispatch(substract(item.id));
                          seedChange();
                        }}
                      >
                        -
                      </SquareButton>
                      <ListLabel>{item.amount}</ListLabel>
                      <SquareButton
                        onClick={() => {
                          dispatch(add(item.id));
                          seedChange();
                        }}
                      >
                        +
                      </SquareButton>
                    </CountSection>

                    <ListButton
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                        seedChange();
                      }}
                    >
                      Remove
                    </ListButton>
                  </Section>
                </ListRight>
              </ListElement>
            ))}
          </CartListContent>
          {empty === true && (
            <>
              <h2>Your Shopping Cart is Empty</h2>
            </>
          )}
          <hr />
        </CartList>
      </CartLeft>
      {empty === false && (
        <CartRight>
          <CartRightFlex>
            <CartRightTitle>Price:</CartRightTitle>
            <CartRightTitle>{totalPrice.toFixed(2)}$</CartRightTitle>
          </CartRightFlex>
          <CartRightFlex>
            <CartRightTitle>Delivery:</CartRightTitle>
            <CartRightTitle>4.99$</CartRightTitle>
          </CartRightFlex>
          <Underline />
          <CartRightFlex>
            <CartRightTitle>Total Price:</CartRightTitle>
            <CartRightTitle>{(totalPrice + 4.99).toFixed(2)}$</CartRightTitle>
          </CartRightFlex>
          <CartRightButton>CHECKOUT</CartRightButton>
        </CartRight>
      )}
    </CartWrapper>
  );
};

export default Cart;
