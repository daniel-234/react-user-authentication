import React from "react";
import { create } from "react-test-renderer";
import Article from "../Article";

/*
 * Example of a snapshot test.
 */
test("snapshot", () => {
  const article = create(<Article />);

  expect(article.toJSON()).toMatchSnapshot();
});
