import { combineReducers } from 'redux';
import decksReducer from './decksReducer';
import cardsReducer from './cardsReducer';


const reducer = combineReducers({
  decksReducer, cardsReducer
})

export default reducer;
