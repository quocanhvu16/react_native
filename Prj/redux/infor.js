const infor = (state = {ID: '', password: ''}, action) => {
  switch (action.type) {
    case 'setInfor':
      state = action.payload;
      break;
  }
  return state;
};

export default infor;
