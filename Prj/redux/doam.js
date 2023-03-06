const doam = (state = 0, action) => {
  switch (action.type) {
    case 'setDoam':
      state = action.payload;
      break;
  }
  return state;
};

export default doam;
