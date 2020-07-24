import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import CharactersContainer from './components/characters-container';

function App() {
  return (
    <Provider store={store}>
      <CharactersContainer />
    </Provider>
  );
}

export default App;
