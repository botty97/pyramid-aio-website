import React from "react";
import Article from "../../components/article/Article";
import "./faq.css";

const Faq = () => (
  <div className="pyramid__faq section__padding" id="faq">
    <div className="pyramid__faq-heading">
      <h1 className="gradient__text">FAQ</h1>
    </div>
    <div className="pyramid__faq-container">
      <div className="pyramid__faq-container_group">
        <Article
          text="How much is a license?"
          answers="A license will be free at the beginning whilst the software is being beta tested."
        />
        <Article
          text="Is it lifetime or a monthly renewal?"
          answers="There will be a renewal fee of £20 per month for Pyramid AIO Raffles."
        />
        <Article
          text="What sites are supported?"
          answers="End, DSM & naked are supported. With many more being added in the near future"
        />
        <Article
          text="When is release?"
          answers="This is unconfirmed at the moment whilst we still work on the development of the software. Follow our Twitter to keep up to date with the progress."
        />
      </div>
    </div>
  </div>
);

export default Faq;
