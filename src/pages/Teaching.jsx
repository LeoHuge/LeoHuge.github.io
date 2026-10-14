import { courses, teachingPage } from "../data/site.js";
import { useI18n } from "../language.jsx";
import PageIntro from "../components/PageIntro.jsx";

export default function Teaching() {
  const { t } = useI18n();

  return (
    <div className="shell page">
      <PageIntro
        kicker={t(teachingPage.kicker)}
        title={t(teachingPage.title)}
        aside={t(teachingPage.aside)}
      />
      <div className="list-block">
        {courses.map((course) => (
          <article className="course" key={course.title.en}>
            <time>{t(course.term)}</time>
            <div>
              <div className="level">{t(course.level)}</div>
              <h2>{t(course.title)}</h2>
              <p>{t(course.text)}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
