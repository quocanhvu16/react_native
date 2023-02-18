import {combineReducers, configureStore} from '@reduxjs/toolkit';
import showMenu from './showMenu';
import setData from './data';

// export const reducer = combineReducers({
//   count: count,
// });

const store = configureStore({
  reducer: {
    showMenu: showMenu,
    setData: setData,
  },
});

export default store;
