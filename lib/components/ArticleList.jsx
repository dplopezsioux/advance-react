import React from "react";

import Article from "./Article";

const ArticleList = (props) => {
  return (
    <div>
      {console.log(props)}

      {Object.values(props.articles).map((article) => (
        <Article
          key={article.id}
          article={article}
          actions={props.articleAccions}
        />
      ))}
    </div>
  );
};

export default ArticleList;
