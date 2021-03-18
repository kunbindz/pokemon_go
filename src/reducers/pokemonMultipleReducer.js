const initialState = {
  loading: false,
  data: {},
  errMsg: "",
};
const PokemonMultipleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMON_MULTIPLE_LOADING":
      return {
        ...state,
        loading: true,
        errMsg: "",
      };
    case "POKEMON_MULTIPLE_FAIL":
      return {
        ...state,
        loading: false,
        errMsg: "unable to find pokemon",
      };
    case "POKEMON_MULTIPLE_SUCCESS":
      return {
        ...state,
        loading: false,
        errMsg: "",
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    default:
      return state;
  }
};
export default PokemonMultipleReducer;
