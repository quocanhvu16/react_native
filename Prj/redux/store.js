import {combineReducers, configureStore} from '@reduxjs/toolkit';
import showMenu from './showMenu';
import setData from './data';
import color from './color';
import lang from './lang';
import dataRoom from './dataRoom';
import lampLivingRoom from './lampLivingroom';
import lampKitchen from './lampKitchen';
import lampBedroom from './lampBedroom';
import lampBathroom from './lampBathroom';

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
    lampLivingRoom: lampLivingRoom,
    lampKitchen: lampKitchen,
    lampBedRoom: lampBedroom,
    lampBathRoom: lampBathroom,
  },
});

export default store;
