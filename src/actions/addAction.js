export const addBasket = (payload) => {
  return (dispatch) => {
    console.log("data: ", payload);
    dispatch({
      type: "ADD_POKEMON_BASKET",
      payload,
    });
  };
};
// export const getNumber = () => {
//   return (dispatch) => {
//     console.log("getting all basket number");
//     dispatch({
//       type: "GET_NUMBER_BASKET",
//     });
//   };
// };
// export const addCart = (payload) => {
//   return (dispatch) => {
//     console.log("getData:", payload);
//     dispatch({
//       type: "ADD_CART",
//       payload,
//     });
//   };
// };

// export const deleteCart = (payload) => {
//   return (dispatch) => {
//     dispatch({
//       type: "DELETE_CART",
//       payload,
//     });
//   };
// };
