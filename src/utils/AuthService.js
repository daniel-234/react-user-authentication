const API_URL = "http://localhost:3001/api";

let authService = () => {
  /*
   * Retrieve the token from localStorage.
   */
  function getToken() {
    return localStorage.getItem("token");
  }
  // TODO
  // refactor
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
    // eslint-disable-next-line no-console
    // .then(jsonData => console.log(jsonData))
  }

  function doAuthentication(endpoint, values) {
    return fetchFromAPI(`${API_URL}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" }
    });
  }

  return Object.assign(
    {},
    {
      signup(username, password) {
        return doAuthentication("user", { username, password });
      },

      finishAuthentication(token) {
        localStorage.setItem("token", token);
      }
    }
  );
};

export default authService;
