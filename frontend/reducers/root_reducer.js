import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import { selectAllPokemon } from './selectors';

const rootReducer = combineReducers({
  pokemon: pokemonReducer
});

export default rootReducer;
