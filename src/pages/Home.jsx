import { useState } from "react";
import { Link } from "react-router-dom";
import { grants, honors, memberships, newsColumns, path, profile, service, ui } from "../data/site.js";
import { useI18n } from "../language.jsx";
import { Arrow } from "../components/Icons.jsx";

export default function Home() {
  const { lang, t } = useI18n();
  const [newsIndex, setNewsIndex] = useState(0);
  const headline = profile.headline[lang];
  const themes = profile.glance[lang];
  const newsColumn = newsColumns[newsIndex];

  return (
    <div className="shell">
      <section className="opening">
        <p className="mark">{t(profile.concern)}</p>
        <h1>
          {headline[0]}
          <br />
          <span>{headline[1]}</span>
        </h1>
        <p className="lede">{t(profile.lede)}</p>
        <div className="hero-actions">
          <Link className="btn-primary" to="/research">
            {t(ui.researchCta)} <Arrow size={13} />
          </Link>
          {profile.scholar && (
            <a className="text-link" href={profile.scholar} target="_blank" rel="noreferrer">
              {ui.scholar} <Arrow size={12} />
            </a>
          )}
        </div>
      </section>

      <section className="theme-board" aria-label={t(ui.glanceLabel)}>
        {themes.map((item, index) => (
          <article key={item}>
            <span>0{index + 1}</span>
            <strong>{item}</strong>
          </article>
        ))}
      </section>
      <dl className="skill-list">
        {profile.skills.map((item) => (
          <div key={item.label.en}>
            <dt>{t(item.label)}</dt>
            <dd>{t(item.text)}</dd>
          </div>
        ))}
      </dl>

      <section className="block" aria-labelledby="news-title">
        <header className="runhead news-head">
          <h2 id="news-title">{t(ui.newsTitle)}</h2>
          <div className="chips" role="tablist" aria-label={t(ui.newsTitle)}>
            {newsColumns.map((column, index) => (
              <button
                key={column.title.en}
                className={index === newsIndex ? "chip on" : "chip"}
                type="button"
                role="tab"
                aria-selected={index === newsIndex}
                onClick={() => setNewsIndex(index)}
              >
                {t(column.title)}
              </button>
            ))}
          </div>
        </header>
        <div className="news-list" role="tabpanel">
          {newsColumn.items.map((item) => {
            const key = `${item.date}-${item.title.zh}`;
            const body = (
              <>
                <time dateTime={item.date.replaceAll(".", "-")}>{item.date}</time>
                <div>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.text)}</p>
                </div>
              </>
            );
            if (item.href?.startsWith("/")) {
              return (
                <Link className="news-card" to={item.href} key={key}>
                  {body}
                </Link>
              );
            }
            if (item.href) {
              return (
                <a className="news-card" href={item.href} key={key} target="_blank" rel="noreferrer">
                  {body}
                </a>
              );
            }
            return (
              <article className="news-card" key={key}>
                {body}
              </article>
            );
          })}
        </div>
      </section>

      <section className="block" aria-labelledby="path-title">
        <header className="runhead">
          <h2 id="path-title">{t(ui.pathTitle)}</h2>
          <span>{t(ui.pathKicker)}</span>
        </header>
        <div className="path-board">
          {path.map((item) => (
            <article className={item.current ? "path-card current" : "path-card"} key={item.title.en}>
              <time>{t(item.period)}</time>
              <h3>
                {t(item.title)}
                {item.current && <span className="now-tag">{t(ui.current)}</span>}
              </h3>
              <p>{t(item.org)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="grants-title">
        <header className="runhead">
          <h2 id="grants-title">{t(ui.grantsTitle)}</h2>
          <span>{t(ui.grantsKicker)}</span>
        </header>
        <div className="grant-list">
          {grants.map((item) => (
            <article key={item.id}>
              <div className="grant-meta">
                <span className="service-role">{t(item.role)}</span>
                <span className="closed-tag">{t(ui.grantClosed)}</span>
              </div>
              <h3>{t(item.title)}</h3>
              <p>
                {t(item.org)} · {item.no}
              </p>
              <p>{t(item.members)}</p>
              <p>{t(item.closed)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="honors-title">
        <header className="runhead">
          <h2 id="honors-title">{t(ui.honorsTitle)}</h2>
          <span>{t(ui.honorsKicker)}</span>
        </header>
        {[
          [ui.researchHonors, honors.research],
          [ui.teachingHonors, honors.teaching],
          [ui.practiceHonors, honors.practice],
          [ui.personalHonors, honors.personal],
        ].map(([label, items]) => (
          <div key={label.en}>
            <h3 className="honor-label">{t(label)}</h3>
            <div className="grant-list">
              {items.map((item) => {
                const inner = (
                  <>
                    <div className="grant-meta">
                      <span className="service-role">{t(item.kind)}</span>
                      <span className="closed-tag">{t(item.grade)}</span>
                      <time>{item.year}</time>
                    </div>
                    <h3>{t(item.title)}</h3>
                    <p>{t(item.note)}</p>
                  </>
                );
                const key = `${item.year}-${item.kind.zh}-${item.grade.zh}-${item.title.zh}`;
                if (item.href?.startsWith("/")) {
                  return (
                    <Link className="honor-card" to={item.href} key={key}>
                      {inner}
                    </Link>
                  );
                }
                return (
                  <article key={key}>
                    {inner}
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="block" aria-labelledby="service-title">
        <header className="runhead">
          <h2 id="service-title">{t(ui.serviceTitle)}</h2>
          <span>{t(ui.serviceKicker)}</span>
        </header>
        <div className="service-grid">
          {service.map((item) => (
            <article key={item.title.en}>
              <div className="service-role">{t(item.role)}</div>
              <h3>{t(item.title)}</h3>
              <p>{t(item.text)}</p>
            </article>
          ))}
        </div>
        <div className="memberships">
          {memberships.map((item) => (
            <div key={item.name.en}>
              <strong>{t(item.name)}</strong>
              <span>{t(item.text)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-panel" id="contact">
        <div>
          <p className="mark light">{t(ui.connect)}</p>
          <h2>
            {ui.connectTitle[lang][0]}
            <br />
            {ui.connectTitle[lang][1]}
          </h2>
          <p>{t(ui.connectLede)}</p>
        </div>
        <div className="contact-aside">
          <figure className="qr-card">
            <img src="/homepage-qr.png" alt={t(ui.qrNote)} width="148" height="148" />
            <figcaption>{t(ui.qrNote)}</figcaption>
          </figure>
          <a className="mail-link" href={`mailto:${profile.email}`}>
            {profile.email} <Arrow />
          </a>
        </div>
      </section>
    </div>
  );
}
