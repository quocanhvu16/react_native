const showMenu = (state = false, action) => {
  switch (action.type) {
    case 'setShowMenu':
      state = !state;
      break;
    case 'setShowMenu1':
      state = action.payload;
      break;
  }
  return state;
};

export default showMenu;
