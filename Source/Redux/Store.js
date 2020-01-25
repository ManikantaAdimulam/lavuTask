import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './RootReducer';

///
const configureStore = () => {
  const root = rootReducer();
  return createStore(root, applyMiddleware(thunk));
};

///
export default configureStore;
