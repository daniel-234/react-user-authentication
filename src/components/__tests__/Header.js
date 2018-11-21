import React from "react";
import { create } from "react-test-renderer";
import Header from "../header";

/*
 * Traverse the output to find specific nodes and make
 * assertions about them.
 */
test("The Header component", () => {
  const testRenderer = create(<Header />);
  /*
   * See docs: https://reactjs.org/docs/test-renderer.html#testrendererroot
   */
  const testInstance = testRenderer.root;

  expect(testInstance.findByProps({ className: "header" }).children).toEqual([
    "React User Authentication"
  ]);
});
