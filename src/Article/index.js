import "./style.css";

export const Article = ({
  articleID,
  articleHeader,
  articleParagraph,
  articleList,
  highlighted = false,
}) => (
  <article
    className={`"article" ${highlighted ? "article--highlighted" : ""}`}
    id={articleID}
  >
    <h3 className="article__header">{articleHeader}</h3>
    <p>{articleParagraph}</p>
    <ul>{articleList}</ul>
  </article>
);
