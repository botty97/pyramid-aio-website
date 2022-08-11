import React from "react";
import "./article.css";

const Article = ({ imgUrl, text, answers }) => (
  <div className="pyramid__faq-container_article">
    {/* <div className="pyramid__faq-container_article-image">
      <img src={imgUrl} alt="FAQ_image" /> //this needs to be a question mark will sort later
    </div> */}
    <div className="pyramid__faq-container_article-content">
      <div>
        <h3>{text}</h3>
      </div>
      <p>{answers}</p>
    </div>
  </div>
);

export default Article;
