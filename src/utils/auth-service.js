/*
 * Constants definitions.
 */
const API_URL = "http://localhost:3001/api";

/*
 * Functional Mixin for data privacy.
 * Return an object with properties that can access those
 * provate data. 
 */
let authService = () => {
  /*
   * Retrieve the token from localStorage.
   */
  function getToken() {
    return localStorage.getItem("token");
  }

  // TODO
  // refactor

  /*
   * Return true if there's a token in localStorage.
   */
  function isAuthenticated() {
    let token = localStorage.getItem("token");
    if (token) {
      // TODO
      // refactor
      return true;
    } else {
      return false;
    }
  }

  /*
   * Fetch data from the given url (with options).
   */
  function fetchFromAPI(url, options) {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    if (isAuthenticated()) {
      headers["Authorization"] = "Bearer " + getToken();
    }

    return fetch(url, {
      headers,
      ...options
    }).then(response => response.json());
  }

  /*
   * Perform the actual authentication call.
   */
  function doAuthentication(endpoint, values) {
    return fetchFromAPI(`${API_URL}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" }
    });
  }

  /*
   * Return an object with the methods we need added.
   * Use closures for data privacy.
   */
  return Object.assign(
    {},
    {
      signup(username, password) {
        return doAuthentication("user", { username, password });
      },
      signin(username, password) {
        return doAuthentication("user/authenticate", { username, password });
      },
      finishAuthentication(token) {
        localStorage.setItem("token", token);
      },
      logout() {
        // Remove the token from localStorage
        localStorage.removeItem("token");
      }
    }
  );
};

export default authService;
