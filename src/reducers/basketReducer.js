const initialState = {
  basketNumber: 0,
  Carts: [],
};
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POKEMON_BASKET":
      let poke = {
        name: action.payload.name,
        weight: action.payload.weight,
        height: action.payload.height,
      };
      state.Carts.push(poke);
      return {
        ...state,
        basketNumber: state.basketNumber + 1,
      };
    default:
      return state;
  }
};

export default basketReducer;
