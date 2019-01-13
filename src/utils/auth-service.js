import isTokenExpired from "./jwtHelper";

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

  /*
   * Check if there is a token saved in localStorage 
   * and if it's still valid.
   */
  function isAuthenticated() {
    let token = localStorage.getItem("token");
    if (token) {
      return !isTokenExpired(token);
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
  function submitToAPI(endpoint, values) {
    return fetchFromAPI(`${API_URL}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" }
    });
  }

  function getResources(endpoint) {
    return fetchFromAPI(`${API_URL}/${endpoint}`, {
      method: "GET",
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
      getResources(endpoint) {
        return getResources(endpoint);
      },
      finishAuthentication(token) {
        localStorage.setItem("token", token);
      },
      isAuthenticated() {
        return isAuthenticated();
      },
      logout() {
        // Remove the token from localStorage
        localStorage.removeItem("token");
      },
      newInstructorSubmit(firstName, lastName, email, company) {
        return submitToAPI("instructor", {
          firstName,
          lastName,
          email,
          company
        });
      },
      signin(username, password) {
        return submitToAPI("user/authenticate", { username, password });
      },
      signup(username, password) {
        return submitToAPI("user", { username, password });
      }
    }
  );
};

export default authService;
