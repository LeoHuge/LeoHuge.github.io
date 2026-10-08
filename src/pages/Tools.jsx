import { Link } from "react-router-dom";
import { tools, toolsPage } from "../data/site.js";
import { useI18n } from "../language.jsx";
import PageIntro from "../components/PageIntro.jsx";
import { Arrow } from "../components/Icons.jsx";

export default function Tools() {
  const { t } = useI18n();

  return (
    <div className="shell page">
      <PageIntro kicker={t(toolsPage.kicker)} title={t(toolsPage.title)} aside={t(toolsPage.aside)} />
      <div>
        {tools.map((tool) => (
          <article className="tool" key={tool.name}>
            <div>
              <p className="tool-index">
                {tool.index} — {t(tool.category)}
              </p>
              <h2>{tool.name}</h2>
              <p className="tool-meta">{t(tool.version)}</p>
              <p className="tool-meta">{tool.stack}</p>
              <p className="tool-summary">{t(tool.summary)}</p>
              <div className="tool-links">
                {tool.links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link key={link.href} to={link.href}>
                      {t(link.label)} <Arrow size={12} />
                    </Link>
                  ) : (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {t(link.label)} <Arrow size={12} />
                    </a>
                  ),
                )}
              </div>
            </div>
            <div>
              {tool.features.map((feature) => (
                <div className="feature" key={feature.label.en}>
                  <strong>{t(feature.label)}</strong>
                  <p>{t(feature.text)}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
