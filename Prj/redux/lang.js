const lang = (state = 'vn', action) => {
  switch (action.type) {
    case 'setVN':
      state = 'vn';
      break;
    case 'setENG':
      state = 'eng';
      break;
  }
  return state;
};

export default lang;
