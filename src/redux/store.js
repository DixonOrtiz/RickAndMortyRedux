import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

//
// Developer Tools
//

//Library that allows to print in console the modifications of the redux state in realtime
import logger from 'redux-logger';

//Library that allows to use action creators that performs asynchronous processes
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
