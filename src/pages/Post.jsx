import { Link, useParams } from "react-router-dom";
import { posts, ui } from "../data/site.js";
import { useI18n } from "../language.jsx";

export default function Post() {
  const { slug } = useParams();
  const { t } = useI18n();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="shell page empty">
        <h1>{t(ui.notFound)}</h1>
        <Link className="text-link" to="/blog">
          {t(ui.back)}
        </Link>
      </div>
    );
  }

  return (
    <div className="shell page">
      <article className="article">
        <Link className="crumb" to="/blog">
          ← {t(post.tag)}
        </Link>
        <h1>{t(post.title)}</h1>
        <time dateTime={post.date.replaceAll(".", "-")}>{post.date}</time>
        {post.body.map((paragraph) => (
          <p key={paragraph.en}>{t(paragraph)}</p>
        ))}
      </article>
    </div>
  );
}
