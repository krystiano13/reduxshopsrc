const removeFromCart = (id: number) => {
  return {
    type: "CART_REMOVE",
      payload: {
        id : id
    },
  };
};

export default removeFromCart;
