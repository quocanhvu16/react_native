const lampBathroom = (state = false, action) => {
  switch (action.type) {
    case 'changeLampBathroom':
      state = action.payload;
      break;
  }
  return state;
};

export default lampBathroom;
