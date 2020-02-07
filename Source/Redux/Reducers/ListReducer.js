import { ADD_NEW_ENTRY, EDIT_ENTRY, STORE_MENU } from "../Actions/Actions";

const initialState = {
  data: [],
  menuGroup: [],
  categories: []
};

export function listReducer(state = initialState, action) {
  if (action.type === STORE_MENU) {
    return {
      ...state,
      data: action.payload,
      menuGroup: action.payload.map(item => item.name),
      categories: action.payload.map((item, index) => {
        return item.categories.map(category => {
          return { name: category.name, data: [category.items] };
        });
      })
    };
  } else {
    return state;
  }
}
