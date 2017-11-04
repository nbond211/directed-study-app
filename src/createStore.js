import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { discover } from './modules';

const middleware = applyMiddleware(thunk);

export default data => {
  const rootReducer = combineReducers({
    //every modules reducer should be define here
    [discover.NAME]: discover.reducer
  })

  return createStore(rootReducer, data, middleware);
};
