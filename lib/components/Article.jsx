import React from "react";

const Article = (props) => {
  const { article, actions } = props;
  const author = actions.lookupAuthor(article.authorId);

  return (
    <div>
      <div>{article.title}</div>
      <div>{article.data}</div>
      <a href={author.website}>
        {author.firstName} {author.lastName}
      </a>
      <div>{article.body}</div>
    </div>
  );
};

export default Article;
