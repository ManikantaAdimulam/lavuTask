///
const GET_MENU = 'GET_MENU';
const STORE_MENU = 'STORE_MENU';
///
const storeMenu = data => {
  return {
    type: STORE_MENU,
    payload: data.data.MenuGroups,
  };
};

///
export {GET_MENU, STORE_MENU, storeMenu};
