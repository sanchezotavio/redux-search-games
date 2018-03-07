import { combineReducers } from 'redux'

import ActiveGameReducer from './reducer_active_game'

import SearchGameReducer from './reducer_search_game'

const rootReducer = combineReducers({
  activeGame: ActiveGameReducer,
  searchGame:  SearchGameReducer
});

export default rootReducer