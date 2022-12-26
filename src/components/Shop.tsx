import React from "react";
import {
  ShopWrapper,
  ShopItem,
  ShopImage,
  ShopItemBaner,
  ShopItemTitle,
} from "../styled-components/ShopStyles";
import ItemPopUp from "./ItemPopUp";

import rtx2070 from "../images/2070.jpg";
import { useSelector } from "react-redux";
import { stateType } from "../reducers/reducer";

interface ShopInterface {
  showForm: () => void;
  hideForm: () => void;
  setSelectedItem: (
    id: number,
    name: string,
    price: number,
    imgSrc: string
  ) => void;
}

const Shop: React.FC<ShopInterface> = ({ showForm, setSelectedItem }) => {
  const catalog = useSelector<stateType, stateType["catalog"]>(
    (state) => state.catalog
  );
  return (
    <ShopWrapper>
      {catalog.map((item) => (
        <ShopItem
          key={item.id}
          onClick={() => {
            setSelectedItem(item.id, item.name, item.price, item.imgSrc);
            showForm();
          }}
        >
          <ShopImage src={item.imgSrc} alt={item.name} />
          <ShopItemBaner>
            <ShopItemTitle>{item.name}</ShopItemTitle>
            <ShopItemTitle>{item.price}$</ShopItemTitle>
          </ShopItemBaner>
        </ShopItem>
      ))}
    </ShopWrapper>
  );
};

export default Shop;
