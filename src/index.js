import React from 'react';
import { Provider } from 'react-redux';

import { discover, chat } from './modules';
import createStore from './createStore';

const store = createStore()

const Main = () => {
  return (
    <Provider store={store}>
      <chat.Chat />
    </Provider>
  )
}

export default Main;
