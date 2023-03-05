const IDHome = (state = '', action) => {
  switch (action.type) {
    case 'setIDHome':
      state = action.payload;
      break;
  }
  return state;
};

export default IDHome;
