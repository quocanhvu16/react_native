const dataRoom = (state = [], action) => {
  switch (action.type) {
    case 'setData':
      state = action.payload;
      break;
  }
  return state;
};

export default dataRoom;
