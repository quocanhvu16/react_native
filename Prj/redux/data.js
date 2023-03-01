import {livingRoom, kitchen, bathRoom, bedRoom, profile} from '../image/image';
const initData = {
  id: 1,
  user: 'test',
  pass: '123',
  name: 'test 123',
  address: 'Ha Noi',
  rooms: [
    {
      name: 'Living Room',
      image: livingRoom,
      temperature: 20,
      lamp: false,
      humidity: 60,
      airConditioner: false,
      smartTv: false,
      router: false,
    },
    {
      name: 'Kitchen',
      image: kitchen,
      temperature: 20,
      lamp: false,
      humidity: 60,
      refrigerator: false,
    },
    {
      name: 'Bed Room',
      image: bedRoom,
      temperature: 20,
      lamp: false,
      airConditioner: false,
      smartTv: false,
      humidity: 60,
    },
    {
      name: 'Bath Room',
      image: bathRoom,
      temperature: 20,
      lamp: false,
      humidity: 60,
      washingMachine: false,
    },
  ],
};

const setData = (state = initData, action) => {
  switch (action.type) {
    case 'getData':
      state = state;
      break;
    case 'changeLamp':
      const index = action.payload.index;
      // const stateTemp = state;
      state.rooms[index] = {
        ...state.rooms[index],
        lamp: action.payload.stateLamp,
      };
      break;
  }
  return state;
};

export default setData;
