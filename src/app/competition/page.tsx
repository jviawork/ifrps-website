import styles from "./competition.module.css";

export const metadata = { title: "Competition Structure" };

const pathways = [
  ["01", "League Performance", "Finish within the designated qualifying range of an eligible sanctioned league and meet participation requirements."],
  ["02", "International Rating", "Meet the World Championship Rating Standard established for the qualification cycle."],
  ["03", "Major Champion", "Win an IFRPS-designated Major operated by IFRPS or a recognized organization."],
  ["04", "Champion Exemption", "The defending World Champion receives qualification to defend the title."],
  ["05", "Qualification Events", "Remaining positions may be filled through regional or Last Chance qualifiers."],
];

export default function CompetitionPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">League · Majors · Worlds</p>
          <h1>Competition Structure</h1>
          <p className="page-hero__lead">
            Season-long league competition and an independent international championship pathway designed to scale from a small founding field to a global sport.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.columns}`}>
          <article className={`panel ${styles.feature}`}>
            <span className="badge">Season</span>
            <h2>IFRPS League</h2>
            <p>Scheduled competition → standings → postseason → Season Champion.</p>
          </article>
          <article className={`panel ${styles.feature}`}>
            <span className="badge">International</span>
            <h2>World Championship</h2>
            <p>Qualified players from leagues, Elo, Majors and international qualification events.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><h2>Road to Worlds</h2><p>Exact percentages and Elo thresholds stay configurable until real competitive data establishes meaningful standards.</p></div>
          <div className={styles.pathways}>
            {pathways.map(([num, title, text]) => (
              <article key={num} className={`panel ${styles.path}`}>
                <span>{num}</span><div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
