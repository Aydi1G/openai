import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import "./article.css";
const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={imgUrl} />
      </div>
      <div className="gpt3__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full Article</p>
      </div>
    </div>
  );
};

export default Article;
