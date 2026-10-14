export default function PageIntro({ kicker, title, aside, children }) {
  return (
    <header className="page-intro">
      <div>
        <p className="crumb">{kicker}</p>
        <h1>{title}</h1>
        {children}
      </div>
      {aside ? <p className="page-aside">{aside}</p> : null}
    </header>
  );
}
