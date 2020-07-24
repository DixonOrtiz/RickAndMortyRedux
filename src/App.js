import React from 'react';
import store from './redux/store';
import CharactersContainer from './components/characters-container';

//
//Provider component that provides the entire application with a global status of redux
//
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <CharactersContainer />
    </Provider>
  );
}

export default App;
