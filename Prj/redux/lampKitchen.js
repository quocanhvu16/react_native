const lampKitchen = (state = false, action) => {
  switch (action.type) {
    case 'changeLampKitchen':
      state = action.payload;
      break;
  }
  return state;
};

export default lampKitchen;
