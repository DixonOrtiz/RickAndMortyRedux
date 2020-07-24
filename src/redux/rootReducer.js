import { combineReducers } from 'redux';
import characterReducer from './character/characterReducer';

//
//Function designed to compose the global state by the substates of each reducer
//
const rootReducer = combineReducers({
  characterState: characterReducer,
});

export default rootReducer;
