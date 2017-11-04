import React from 'react';
import { Provider } from 'react-redux';

import { discover } from './modules';
import createStore from './createStore';

const store = createStore()

const Main = () => {
  return (
    <Provider store={store}>
      <discover.Discover />
    </Provider>
  )
}

export default Main;
