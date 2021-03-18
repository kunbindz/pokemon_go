import { combineReducers } from "redux";
import PokemonListReducer from "./pokemonListReducer";
import PokemonMultipleReducer from "./pokemonMultipleReducer";
import PokemonCart from "./CartReducer";
import basketReducer from "./basketReducer";
const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer,
  Cart: PokemonCart,
  basketState: basketReducer,
});
export default RootReducer;
