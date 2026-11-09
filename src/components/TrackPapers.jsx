import { Link } from "react-router-dom";
import { papers } from "../data/site.js";

export default function TrackPapers({ paperIds, lang, className = "track-papers", showYear = false }) {
  const items = (paperIds || [])
    .map((id) => papers.find((paper) => paper.id === id))
    .filter(Boolean);
  if (!items.length) return null;

  return (
    <ul className={className}>
      {items.map((paper) => {
        const title = paper.title[lang];
        const link = paper.href ? (
          <a href={paper.href} target="_blank" rel="noreferrer">
            {title}
          </a>
        ) : (
          <Link to={`/research#paper-${paper.id}`}>{title}</Link>
        );
        return (
          <li key={paper.id}>
            {showYear ? <time dateTime={String(paper.year)}>{paper.year}</time> : null}
            {link}
          </li>
        );
      })}
    </ul>
  );
}
