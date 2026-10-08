import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { profile, ui } from "../data/site.js";
import { useI18n } from "../language.jsx";
import { GitHub, Mail, MenuIcon, Orcid } from "./Icons.jsx";

const titles = {
  "/": ui.pages.home,
  "/research": ui.pages.research,
  "/tools": ui.pages.tools,
  "/teaching": ui.pages.teaching,
  "/blog": ui.pages.blog,
};

export default function Layout() {
  const { lang, setLang, t } = useI18n();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    const page = location.pathname.startsWith("/blog/")
      ? ui.pages.blog
      : titles[location.pathname] || ui.pages.home;
    const name = lang === "zh" ? `${profile.name.zh} ${profile.name.en}` : profile.name.en;
    document.title = `${name} | ${page[lang]}`;

    if (location.hash) {
      const node = document.querySelector(location.hash);
      if (node) {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location, lang]);

  const links = ui.nav.map((item) => (
    <NavLink key={item.to} to={item.to} end={item.to === "/"}>
      {item[lang]}
    </NavLink>
  ));

  return (
    <div className="app-frame">
      <a className="skip-link" href="#content">
        {t(ui.skip)}
      </a>
      <aside className={open ? "spine is-open" : "spine"}>
        <div className="spine-top">
          <Link className="seal" to="/" aria-label={t(profile.name)}>
            {profile.monogram}
          </Link>
          <button
            className="spine-close"
            type="button"
            aria-label={lang === "zh" ? "关闭菜单" : "Close menu"}
            onClick={() => setOpen(false)}
          >
            <MenuIcon open />
          </button>
        </div>
        <img className="spine-photo" src={profile.portrait} alt="" />
        <p className="spine-name">
          {lang === "zh" ? (
            <>
              {profile.name.zh}
              <span className="spine-name-en">{profile.name.en}</span>
            </>
          ) : (
            profile.name.en
          )}
        </p>
        <p className="spine-role">{t(profile.role)}</p>
        <p className="spine-org">{t(profile.org)}</p>
        <nav aria-label={lang === "zh" ? "主导航" : "Primary"}>{links}</nav>
        <div className="spine-foot">
          <button
            className="language-button"
            type="button"
            aria-label={lang === "zh" ? "Switch to English" : "切换到中文"}
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
          >
            <span className={lang === "zh" ? "on" : undefined}>中文</span>
            <span className={lang === "en" ? "on" : undefined}>EN</span>
          </button>
          <div className="spine-links">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail />
            </a>
            <a href={profile.orcid} target="_blank" rel="noreferrer" aria-label="ORCID">
              <Orcid />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHub />
            </a>
          </div>
        </div>
      </aside>

      <div className="sheet">
        <header className="mobile-bar">
          <Link to="/" className="mobile-name">
            {lang === "zh" ? profile.name.zh : profile.name.en}
          </Link>
          <button
            className="language-button light"
            type="button"
            aria-label={lang === "zh" ? "Switch to English" : "切换到中文"}
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
          >
            <span className={lang === "zh" ? "on" : undefined}>中</span>
            <span className={lang === "en" ? "on" : undefined}>EN</span>
          </button>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
          </button>
        </header>
        <main id="content">
          <Outlet />
        </main>
        <footer className="colophon">
          <span>{profile.name.en}</span>
          <span>{t(profile.footerNote)}</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </div>
  );
}
