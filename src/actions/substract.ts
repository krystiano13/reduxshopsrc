const substract = (id: number) => {
  return {
    type: "SUBSTRACT",
    payload: {
      id: id,
    },
  };
};

export default substract;
