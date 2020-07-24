import { combineReducers } from 'redux';
import characterReducer from './character/characterReducer';

const rootReducer = combineReducers({
  characterState: characterReducer,
});

export default rootReducer;
