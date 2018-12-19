import authService from "../auth-service";

describe("The authentication service", () => {
  test("has methods to authenticate", () => {
    expect(authService()).toHaveProperty("signup");
    expect(authService()).toHaveProperty("finishAuthentication");
    expect(authService()).toHaveProperty("isAuthenticated");
  });

  test("has private data", () => {
    expect(authService()).not.toHaveProperty("doAuthentication");
    expect(authService()).not.toHaveProperty("fetchFromAPI");
  });
});
