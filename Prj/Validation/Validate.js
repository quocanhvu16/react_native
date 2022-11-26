export const isValidSdt = sdt => {
  if (sdt.length == 4) {
    return true;
  } else {
    return false;
  }
};
export const isValidPass = password => {
  if (password.length < 3) {
    return false;
  } else {
    return true;
  }
};
