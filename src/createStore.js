import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import { discover, chat } from './modules';


const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

const middleware = applyMiddleware(thunk);

export default data => {
  const rootReducer = combineReducers({
    //every modules reducer should be define here
    [discover.NAME]: discover.reducer,
    [chat.NAME]: chat.reducer
  });

  return createStore(rootReducer, data, composeEnhancers(middleware));
};
