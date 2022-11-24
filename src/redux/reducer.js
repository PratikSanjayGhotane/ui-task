export const cartActions = (data = [], action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return 1 + 1;
    default:
      return [];
  }
};
