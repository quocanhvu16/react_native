import {combineReducers, configureStore} from '@reduxjs/toolkit';
import showMenu from './showMenu';
import setData from './data';
import color from './color';
import lang from './lang';
import dataRoom from './dataRoom';

// export const reducer = combineReducers({
//   count: count,
// });

const store = configureStore({
  reducer: {
    showMenu: showMenu,
    setData: setData,
    color: color,
    lang: lang,
    dataRoom: dataRoom,
  },
});

export default store;
