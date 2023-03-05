const dataUser = (state = [], action) => {
  switch (action.type) {
    case 'setDataUser':
      state = action.payload;
      break;
  }
  return state;
};

export default dataUser;
