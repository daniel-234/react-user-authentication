import authService from "../AuthService";

describe("The authentication service", () => {
  test("has methods to authenticate", () => {
    expect(authService()).toHaveProperty("signup");
    expect(authService()).toHaveProperty("finishAuthentication");
  });

  test("has private data", () => {
    expect(authService()).not.toHaveProperty("doAuthentication");
    expect(authService()).not.toHaveProperty("isAuthenticated");
    expect(authService()).not.toHaveProperty("fetchFromAPI");
  });
});
