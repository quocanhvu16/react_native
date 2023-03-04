const lampBedroom = (state = false, action) => {
  switch (action.type) {
    case 'changeLampBedroom':
      state = action.payload;
      break;
  }
  return state;
};

export default lampBedroom;
