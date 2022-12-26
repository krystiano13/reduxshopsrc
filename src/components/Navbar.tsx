import React from "react";
import {
  NavbarWrapper,
  NavTitle,
  BiggerSpan,
  NavCartButton,
  NavCartImage,
} from "../styled-components/NavbarStyles";
import bag from "../images/bag.png";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { stateType } from "../reducers/reducer";

interface NavbarInterface {
  seed: number;
}

const Navbar: React.FC<NavbarInterface> = ({ seed }) => {
  const navigate = useNavigate();
  const totalPrice = useSelector<stateType, stateType["totalPrice"]>(
    (state) => state.totalPrice
  );
  return (
    <NavbarWrapper id={seed.toString()}>
      <NavTitle onClick={() => navigate("/reduxshop/")}>
        Redux<BiggerSpan>Shop</BiggerSpan>
      </NavTitle>
      <NavCartButton onClick={() => navigate("/reduxshop/cart")}>
        {totalPrice.toFixed(2)}$
        <NavCartImage src={bag} alt="bag" />
      </NavCartButton>
    </NavbarWrapper>
  );
};

export default Navbar;
