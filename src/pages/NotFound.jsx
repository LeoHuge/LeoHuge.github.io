import { Link } from "react-router-dom";
import { ui } from "../data/site.js";
import { useI18n } from "../language.jsx";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="shell page empty">
      <h1>{t(ui.notFound)}</h1>
      <Link className="text-link" to="/">
        {t(ui.back)}
      </Link>
    </div>
  );
}
