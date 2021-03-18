export const addToCard = (product) => (dispatch, getState) => {
  const cartItems = getState.cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x.id === product.id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: "ADD_TO_CART",
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((x) => x.id !== product.id);
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: { cartItems },
  });
  localStorage.setItem(JSON.stringify(cartItems));
};
