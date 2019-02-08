import { isTokenExpired, getScope } from "./jwtHelper";

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
    }).then(function(response) {
      // Check that the fetch was successful and parse the body text as JSON..
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Checking_that_the_fetch_was_successful
      if (response.ok) {
        return response.json();
      }
      // Otherwise return a Promise object that is rejected with a given reason,
      // that is a text object with an error message sent by the server.
      return Promise.reject(response.text());
    });
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
   * Return the scope property value of the token.
   */
  function getUserScope() {
    let token = localStorage.getItem("token");
    if (token) {
      let scope = getScope(token);
      return scope;
    } else {
      return false;
    }
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
      getUserScope() {
        return getUserScope();
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
      newInstructorSubmit(firstname, lastname, company) {
        return submitToAPI("instructors", {
          firstname,
          lastname,
          company
        });
      },
      signin(username, password) {
        return submitToAPI("users/authenticate", { username, password });
      },
      signup(username, password) {
        return submitToAPI("users", { username, password });
      },
      signupAdmin(username, password) {
        return submitToAPI("users", { username, password, admin: true });
      }
    }
  );
};

export default authService;
