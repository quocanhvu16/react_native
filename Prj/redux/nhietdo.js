const nhietdo = (state = 0, action) => {
  switch (action.type) {
    case 'setNhietdo':
      state = action.payload;
      break;
  }
  return state;
};

export default nhietdo;
