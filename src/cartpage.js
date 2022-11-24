import React from "react";
import addToCart from "./redux/action";
import { useDispatch } from "react-redux";

const Cartpage = () => {
  const dispatch = useDispatch();
  const data = {
    name: "abc",
    price: 30,
  };
  return (
    <div className="App">
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => dispatch(addToCart(data))}
      >
        Primary
      </button>
    </div>
  );
};

export default Cartpage;
