import {ADD_NEW_ENTRY, EDIT_ENTRY, STORE_MENU} from '../Actions/Actions';

const initialState = {
  data: [],
};

export function listReducer(state = initialState, action) {
  if (action.type === STORE_MENU) {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
}
