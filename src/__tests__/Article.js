import React from "react";
import { create } from "react-test-renderer";
import Article from "../Article";

/*
 * Example of a snapshot test.
 */
test("Snapshot of the Article component", () => {
  /*
   * The `react-test-renderer` package can be used to
   * render React components to pure JavaScript objects,
   * without depending on the DOM.
   * The `create` method creates a `TestRenderer` instance
   * with the passed React element. It doesn't use the real
   * DOM, but it still fully renders the component tree into
   * memory, so you can make assertions about it.
   * See docs -> https://reactjs.org/docs/test-renderer.html
   */
  const article = create(<Article />);

  expect(article.toJSON()).toMatchSnapshot();
});
