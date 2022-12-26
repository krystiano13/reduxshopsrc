const addToCart = (
  id: number,
  name: string,
  price1: number,
  amount: number,
  price2: number,
  imgSrc: string
) => {
  return {
    type: "CART_ADD",
    payload: {
      id: id,
      name: name,
      price1: price1,
      amount: amount,
      price2: price2,
      imgSrc: imgSrc
    },
  };
};

export default addToCart;
