import React from "react";

import ArticleList from "../ArticleList";

import TestRenderer from "react-test-renderer";

describe("ArticleList", () => {
  const testProp = {
    article: {
      a: { id: "a" },
      b: { id: "b" },
    },
    articleAction: {
      lookupAuthor: jest.fn(() => ({})),
    },
  };

  it("Render Correctly", () => {
    const tree = TestRenderer.create(<ArticleList />).toJSON();
    console.log(tree);
  });
});
