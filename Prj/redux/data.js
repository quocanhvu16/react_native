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
      lamp1: false,
      humidity: 60,
      lamp2: false,
    },
    {
      name: 'Kitchen',
      image: kitchen,
      temperature: 20,
      lamp1: false,
      humidity: 60,
    },
    {
      name: 'Bed Room',
      image: bedRoom,
      temperature: 20,
      lamp1: false,
      lamp2: false,
      humidity: 60,
    },
  ],
};

const setData = (state = initData, action) => {
  switch (action.type) {
    case 'getData':
      state = state;
      break;
    case 'putData':
      state = action.payload;
      break;
    case 'changeLamp':
      const name = action.payload.name;
      const number = action.payload.number;
      const stateLamp = action.payload.state;
      const dataTemp = {...initData};
      for (let i = 0; i < dataTemp.rooms.length; i++) {
        if (dataTemp.rooms[i].name === name) {
          dataTemp.rooms[i][`lamp${number}`] = stateLamp;
        }
      }
      state = dataTemp;
      break;
  }
  return state;
};

export default setData;
