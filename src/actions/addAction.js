export const addBasket = (payload) => {
  return (dispatch) => {
    console.log("data: ", payload);
    dispatch({
      type: "ADD_POKEMON_BASKET",
      payload,
    });
  };
};

export const renamePokemon = (payload) => {
  return (dispatch) => {
    console.log("newName:", payload);
    dispatch({
      type: "RENAME_POKEMON",
      payload,
    });
  };
};
// export const deleteCart = (payload) => {
//   return (dispatch) => {
//     dispatch({
//       type: "DELETE_CART",
//       payload,
//     });
//   };
// };
