async function fetchUser() {
  const requestUrl = 'http://localhost:3000/user';
  const response = await fetch(requestUrl);
  const responseJson = await response.json();
  return responseJson;
}

export {fetchUser};
