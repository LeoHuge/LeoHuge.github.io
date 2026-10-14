import { Link } from "react-router-dom";
import { blogPage, posts } from "../data/site.js";
import { useI18n } from "../language.jsx";
import PageIntro from "../components/PageIntro.jsx";

export default function Blog() {
  const { t } = useI18n();

  return (
    <div className="shell page">
      <PageIntro kicker={t(blogPage.kicker)} title={t(blogPage.title)} aside={t(blogPage.aside)} />
      <div className="list-block">
        {posts.map((post) => (
          <Link className="post-row" to={`/blog/${post.slug}`} key={post.slug}>
            <time dateTime={post.date.replaceAll(".", "-")}>{post.date}</time>
            <div>
              <div className="level">{t(post.tag)}</div>
              <h2>{t(post.title)}</h2>
              <p>{t(post.excerpt)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
