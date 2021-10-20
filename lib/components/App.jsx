import React, { useEffect, useState } from "react";

import DataApi from "../DataApi";

import { data } from "../testData.json";

import ArticleList from "./ArticleList";

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
    //console.log(this.state);
  }
  articleAccions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };
  render() {
    return (
      <>
        <h2>Hello from React.JS</h2>
        <ArticleList
          articles={this.state.articles}
          articleAccions={this.articleAccions}
        />
      </>
    );
  }
}

export default App;
