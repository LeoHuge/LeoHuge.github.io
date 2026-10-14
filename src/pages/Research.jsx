import { useMemo, useState } from "react";
import { grants, paperTagCatalog, papers, profile, research, ui } from "../data/site.js";
import { useI18n } from "../language.jsx";
import PageIntro from "../components/PageIntro.jsx";
import { Arrow } from "../components/Icons.jsx";

function paperTitles(paper, lang) {
  if (paper.pubLang === "en") {
    return { main: paper.title.en, sub: paper.title.zh };
  }
  if (lang === "en") {
    return { main: paper.title.en, sub: paper.title.zh };
  }
  return { main: paper.title.zh, sub: paper.title.en };
}

function PaperCard({ paper, lang, t }) {
  const titles = paperTitles(paper, lang);
  return (
    <article className="paper">
      <time>{paper.year}</time>
      <h3>{titles.main}</h3>
      {titles.sub && titles.sub !== titles.main && (
        <p className="paper-title-alt">{titles.sub}</p>
      )}
      <ul className="paper-tags" aria-label={lang === "zh" ? "论文标签" : "Paper labels"}>
        {(paper.tags || []).map((id) => {
          const tag = paperTagCatalog[id];
          if (!tag) return null;
          return (
            <li className={`tag tag-${tag.kind}`} key={id}>
              {tag[lang]}
            </li>
          );
        })}
      </ul>
      <p className="paper-authors">{t(paper.authors)}</p>
      <p className="paper-role">{t(paper.role)}</p>
      <p className="venue">
        {t(paper.venue)}
        {paper.href && (
          <a href={paper.href} target="_blank" rel="noreferrer">
            {paper.href.includes("doi.org") ? "DOI" : lang === "zh" ? "链接" : "Link"}
          </a>
        )}
      </p>
      <blockquote className="paper-cite">
        <span className="paper-cite-label">{t(research.citeLabel)}</span>
        {t(paper.citation)}
      </blockquote>
    </article>
  );
}

export default function Research() {
  const { lang, t } = useI18n();
  const groups = research.publicationGroups;
  const [group, setGroup] = useState("all");
  const [year, setYear] = useState("all");

  const grouped = useMemo(() => {
    const map = Object.fromEntries([...groups, research.otherGroup].map((item) => [item.id, []]));
    papers.forEach((paper) => {
      if (!map[paper.group]) map[paper.group] = [];
      map[paper.group].push(paper);
    });
    return map;
  }, [groups]);

  const pool = group === "all" ? papers : grouped[group] || [];
  const years = useMemo(
    () => [...new Set(pool.map((paper) => paper.year))].sort((a, b) => b - a),
    [pool],
  );
  const activeYear = year === "all" || years.includes(year) ? year : "all";
  const displayGroups = group === "all" ? [...groups, research.otherGroup] : groups.filter((item) => item.id === group);

  const setGroupAndYear = (id) => {
    setGroup(id);
    setYear("all");
  };

  return (
    <div className="shell page">
      <PageIntro
        kicker={t(research.kicker)}
        title={t(research.title)}
        aside={t(research.aside)}
      >
        <div className="intro-links">
          <span className="angle">{t(research.angle)}</span>
          <a className="text-link" href="#papers">
            {t(ui.readPapers)}
          </a>
        </div>
      </PageIntro>

      <div className="block-head">
        <h2>{t(research.tracksTitle)}</h2>
        <span>{t(research.tracksNote)}</span>
      </div>
      <div className="tracks">
        {research.tracks.map((track) => (
          <article className="track" key={track.index}>
            <div className="track-kicker">
              {track.index} {t(track.stage)}
            </div>
            <h3>{t(track.title)}</h3>
            <p>{t(track.text)}</p>
          </article>
        ))}
      </div>

      <div className="methods">
        <strong>{t(research.methodsLabel)}</strong>
        <p>{t(research.methods)}</p>
      </div>

      <div className="block-head">
        <h2>{t(research.grantsTitle)}</h2>
        <span>{t(research.grantsNote)}</span>
      </div>
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

      <div className="block-head" id="papers">
        <h2>{t(research.papersTitle)}</h2>
        <span>{t(research.papersNote)}</span>
      </div>
      <div className="filters">
        <div className="filter-row">
          <span className="filter-label">{t(research.groupLabel)}</span>
          <div className="chips" role="group" aria-label={t(research.groupLabel)}>
            <button
              className={group === "all" ? "chip on" : "chip"}
              type="button"
              aria-pressed={group === "all"}
              onClick={() => setGroupAndYear("all")}
            >
              {lang === "zh" ? "全部" : "All"}
            </button>
            {groups.map((item) => (
              <button
                key={item.id}
                className={group === item.id ? "chip on" : "chip"}
                type="button"
                aria-pressed={group === item.id}
                onClick={() => setGroupAndYear(item.id)}
              >
                {item[lang]}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-row">
          <span className="filter-label">{t(research.yearLabel)}</span>
          <div className="chips" role="group" aria-label={t(research.yearLabel)}>
            <button
              className={activeYear === "all" ? "chip on" : "chip"}
              type="button"
              aria-pressed={activeYear === "all"}
              onClick={() => setYear("all")}
            >
              {lang === "zh" ? "全部" : "All"}
            </button>
            {years.map((item) => (
              <button
                key={item}
                className={activeYear === item ? "chip on" : "chip"}
                type="button"
                aria-pressed={activeYear === item}
                onClick={() => setYear(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="side-links">
            {profile.scholar && (
              <a className="btn-ghost" href={profile.scholar} target="_blank" rel="noreferrer">
                Scholar <Arrow size={12} />
              </a>
            )}
            {profile.orcid && (
              <a className="btn-ghost" href={profile.orcid} target="_blank" rel="noreferrer">
                ORCID <Arrow size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div>
        {displayGroups.map((item) => {
          const items = (grouped[item.id] || []).filter(
            (paper) => activeYear === "all" || paper.year === activeYear,
          );
          const keepEmpty = group !== "all" || (activeYear === "all" && item.empty);
          if (!items.length && !keepEmpty) return null;
          return (
            <section className="paper-group" key={item.id} aria-labelledby={`group-${item.id}`}>
              <div className="paper-group-head">
                <h3 id={`group-${item.id}`}>{item[lang]}</h3>
                {item.note && <p>{t(item.note)}</p>}
              </div>
              {items.length ? (
                items.map((paper) => (
                  <PaperCard key={paper.id} paper={paper} lang={lang} t={t} />
                ))
              ) : (
                <p className="empty-papers">{t(item.empty || research.emptyGroup)}</p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
