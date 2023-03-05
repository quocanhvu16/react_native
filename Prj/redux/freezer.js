const freezer = (state = false, action) => {
  switch (action.type) {
    case 'changeFreezer':
      state = action.payload;
      break;
  }
  return state;
};

export default freezer;
