import jwtDecode from "jwt-decode";

function getTokenExpirationDate(token) {
  let decodedToken = jwtDecode(token);

  if (!decodedToken) {
    return null;
  }

  // Initialize the date with 0; this sets it to the beginning
  // of the epoch (Jan 1st 1970 00:00:00).
  let date = new Date(0);
  // Set the seconds for the date specified by the token
  // expiration time according to universal time.
  date.setUTCSeconds(decodedToken.exp);

  return date;
}

export function isTokenExpired(token) {
  let date = getTokenExpirationDate(token);

  if (date === null) {
    return false;
  }

  return date.valueOf() < new Date().valueOf;
}

/*
 * Decode the token and return the token scope
 * property value.
 */
export function getScope(token) {
  let decodedToken = jwtDecode(token);
  return decodedToken.scope;
}
