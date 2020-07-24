import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

//
// Developer Tools
//

//Library that allows to print in console the modifications of the redux status in realtime
import logger from 'redux-logger';

//Library that allows you to use action creators that perform asynchronous processes
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
