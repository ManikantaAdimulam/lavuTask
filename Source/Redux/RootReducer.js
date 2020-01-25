import {combineReducers} from 'redux';
import {listReducer} from './Reducers/ListReducer';
const initialState = {
  name: 'Dinesh',
};

function reducer(state = initialState, action) {
  return {...state};
}
export const rootReducer = () => {
  return combineReducers({reducer, listReducer});
};
