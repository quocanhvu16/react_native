export const isValidSdt = sdt => {
  if (sdt.length > 11 || sdt.length < 10) {
    return false;
  } else {
    return true;
  }
};
export const isValidPass = password => {
  if (password.length < 3) {
    return false;
  } else {
    return true;
  }
};
