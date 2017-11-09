import React from 'react';
import { Provider } from 'react-redux';

import { discover, chat, navigation } from './modules';
import createStore from './createStore';

const store = createStore()

const Main = () => {
  return (
    <Provider store={store}>
      <navigation.Navigation />
    </Provider>
  )
}

export default Main;
