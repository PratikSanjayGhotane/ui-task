const addToCart = (data) => {
  console.log(data);
  return {
    type: "ADD_TO_CART",
    data,
  };
};

export default addToCart;
