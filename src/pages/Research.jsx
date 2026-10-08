import { useMemo, useState } from "react";
import { papers, profile, research, ui } from "../data/site.js";
import { useI18n } from "../language.jsx";
import PageIntro from "../components/PageIntro.jsx";
import { Arrow } from "../components/Icons.jsx";

export default function Research() {
  const { lang, t } = useI18n();
  const years = useMemo(
    () => [...new Set(papers.map((paper) => paper.year))].sort((a, b) => b - a),
    [],
  );
  const [year, setYear] = useState("all");
  const visible = papers.filter((paper) => year === "all" || paper.year === year);

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

      <div className="block-head" id="papers">
        <h2>{t(research.papersTitle)}</h2>
        <span>{t(research.papersNote)}</span>
      </div>
      <div className="filters">
        <div className="chips" role="group" aria-label={t(research.papersTitle)}>
          <button
            className={year === "all" ? "chip on" : "chip"}
            type="button"
            aria-pressed={year === "all"}
            onClick={() => setYear("all")}
          >
            {lang === "zh" ? "全部" : "All"}
          </button>
          {years.map((item) => (
            <button
              key={item}
              className={year === item ? "chip on" : "chip"}
              type="button"
              aria-pressed={year === item}
              onClick={() => setYear(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="side-links">
          <a className="btn-ghost" href={profile.scholar} target="_blank" rel="noreferrer">
            Scholar <Arrow size={12} />
          </a>
          <a className="btn-ghost" href={profile.orcid} target="_blank" rel="noreferrer">
            ORCID <Arrow size={12} />
          </a>
        </div>
      </div>
      <div>
        {visible.map((paper) => (
          <article className="paper" key={paper.title.en}>
            <time>{paper.year}</time>
            <h3>{t(paper.title)}</h3>
            <p>{paper.authors}</p>
            <p className="venue">
              {t(paper.venue)}
              {paper.href && (
                <a href={paper.href} target="_blank" rel="noreferrer">
                  DOI
                </a>
              )}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
