const lampLivingRoom = (state = false, action) => {
  switch (action.type) {
    case 'changeLampLivingroom':
      state = action.payload;
      break;
  }
  return state;
};

export default lampLivingRoom;
