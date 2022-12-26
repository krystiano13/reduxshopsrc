import rtx2070 from "../images/2070.jpg";
import i9 from "../images/i9_9900k.jpg";
import mx500 from "../images/mx5001.jpg";
import radeon from "../images/radeon.jpg";
import mxmaster from "../images/mxmaster.webp";

export type stateType = {
  catalog: Catalog[];
  totalPrice: number;
  items: Item[];
  empty: boolean;
};

type ActionType = {
  type: string;
  payload: Item;
};

export interface Item {
  id: number;
  name: string;
  price1: number;
  amount: number;
  price2: number;
  imgSrc: string;
}

export type Catalog = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
};

const initialState: stateType = {
  catalog: [
    {
      id: 0,
      name: "GEFORCE RTX 2070",
      price: 499.99,
      imgSrc: rtx2070,
    },
    {
      id: 1,
      name: "INTEL CORE I9 9900K",
      price: 999.99,
      imgSrc: i9,
    },
    {
      id: 2,
      name: "CRUCIAL MX500 1TB",
      price: 99.99,
      imgSrc: mx500,
    },
    {
      id: 3,
      name: "RADEON RX 5700XT",
      price: 399.99,
      imgSrc: radeon,
    },
    {
      id: 4,
      name: "LOGITECH MX MASTER 3",
      price: 129.99,
      imgSrc: mxmaster,
    },
  ],
  totalPrice: 0.0,
  items: [],
  empty: true,
};

const reducer = (state = initialState, action: ActionType) => {
  const sumPrice = () => {
    state.totalPrice = 0;
    state.items.forEach((item) => {
      state.totalPrice += item.price2;
    });
  };

  const isEmpty = () => {
    if (state.items.length < 1) state.empty = true;
    else state.empty = false;
  };

  switch (action.type) {
    case "CART_ADD":
      if (!state.items.some((item) => item.name === action.payload.name)) {
        state.items.push(action.payload);
      } else {
        const index = state.items.findIndex(
          (item) => item.name === action.payload.name
        );
        state.items[index].amount += action.payload.amount;
        state.items[index].price2 += action.payload.price2;
        sumPrice();
      }
      sumPrice();
      isEmpty();
      return state;
    case "CART_REMOVE":
      const id = action.payload.id;
      state.items = state.items.filter((item) => item.id !== id);
      sumPrice();
      isEmpty();
      return state;
    case "ADD":
      const id1 = action.payload.id;
      const itemIndex = state.items.findIndex((item) => item.id === id1);
      state.items[itemIndex].amount++;
      state.items[itemIndex].price2 += state.items[itemIndex].price1;
      sumPrice();
      isEmpty();
      return state;
    case "SUBSTRACT":
      const id2 = action.payload.id;
      const itemIndex2 = state.items.findIndex((item) => item.id === id2);
      if (state.items[itemIndex2].amount > 1) {
        state.items[itemIndex2].amount--;
        state.items[itemIndex2].price2 -= state.items[itemIndex2].price1;
      }
      sumPrice();
      isEmpty();
      return state;
    default:
      sumPrice();
      isEmpty();
      return state;
  }
};

export default reducer;
