import styles from "./about.module.css";

export const metadata = {
  title: "About the Federation",
};

export default function AboutPage() {
  return (
    <main>
      {/* About Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">About <span className="gold">IFRPS</span></p>

          <h1>
            Building the international structure for competitive Rock Paper Scissors
          </h1>

          <p className="page-hero__lead">
            <span className="gold">IFRPS</span> serves as the international governing and competitive body
            for Rock Paper Scissors, connecting established and emerging
            leagues and organizations through shared standards, recognized
            competition, international rankings, and a clear pathway to the
            highest levels of the sport.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className={`container ${styles.missionGrid}`}>
          <div className={styles.missionIntro}>
            <p className="page-hero__eyebrow">Our Mission</p>

            <h2>
              Strengthening the sport by connecting the communities that built it.
            </h2>
          </div>

          <div className={styles.missionCopy}>
            <p>
              <span className="gold">IFRPS</span> is designed to bring the competitive Rock Paper Scissors
              community together under one international structure while
              allowing leagues and organizations to retain their own identities,
              branding, communities, tournaments, and traditions.
            </p>

            <p>
              Organizations remain free to operate their own competitions and
              formats. When a league or tournament meets{" "}
              <span className="gold">IFRPS</span> standards for recognized competition,
              its verified results can contribute to the{" "}
              <span className="gold">IFRPS</span> International Elo system and the wider
              international competitive pathway.
            </p>
          </div>
        </div>
      </section>

      {/* Federation Structure */}
      <section className={`section ${styles.structureSection}`}>
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="page-hero__eyebrow">Federation Structure</p>
              <h2>How <span className="gold">IFRPS</span> connects the sport</h2>
            </div>

            <p>
              Independent organizations remain distinct while participating in a
              shared international competition system.
            </p>
          </div>

          <div className={styles.structureFlow}>
            <div className={`panel ${styles.structureCard}`}>
              <span>01 </span>
              <strong><span className="gold">IFRPS</span></strong>
              <p>
                International standards, recognition, rankings, championships,
                and competition structure.
              </p>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              ↓
            </div>

            <div className={`panel ${styles.structureCard}`}>
              <span>02 </span>
              <strong>Recognized Organizations</strong>
              <p>
                Established and emerging organizations operating within the
                international federation network.
              </p>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              ↓
            </div>

            <div className={`panel ${styles.structureCard}`}>
              <span>03 </span>
              <strong>Sanctioned Competition</strong>
              <p>
                Leagues and tournaments reviewed against <span className="gold">IFRPS</span> competition and
                integrity standards.
              </p>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              ↓
            </div>

            <div className={`panel ${styles.structureCard}`}>
              <span>04 </span>
              <strong>Verified Results</strong>
              <p>
                Eligible results are recorded and incorporated into official
                player records.
              </p>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              ↓
            </div>

            <div className={`panel ${styles.structureCard}`}>
              <span>05 </span>
              <strong>International Elo</strong>
              <p>
                One international ranking connects qualified competition across
                participating organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Keep Their Identity */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="page-hero__eyebrow">One Federation. Many Organizations.</p>
              <h2>Organizations keep what makes them unique.</h2>
            </div>
          </div>

          <div className={styles.relationshipGrid}>
            <article className={`panel ${styles.relationshipCard}`}>
              <h3>Organizations Maintain</h3>

              <ul>
                <li>Their name and identity</li>
                <li>Their branding and visual style</li>
                <li>Their local or regional community</li>
                <li>Their own leagues and tournaments</li>
                <li>Their own traditions and event atmosphere</li>
                <li>Independent or alternate competition formats</li>
              </ul>
            </article>

            <article className={`panel ${styles.relationshipCard}`}>
              <h3><span className="gold">IFRPS</span> Provides</h3>

              <ul>
                <li>International rules and competition standards</li>
                <li>Organization and event recognition</li>
                <li>Sanctioning standards for Elo-eligible competition</li>
                <li>A unified international Elo ranking</li>
                <li>Major-event and championship pathways</li>
                <li>A central hub for rankings, results, events, and news</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Competitive Pathway */}
      <section className={`section ${styles.pathwaySection}`}>
        <div className="container">
          <div className={styles.pathwayIntro}>
            <p className="page-hero__eyebrow">Competitive Pathway</p>

            <h2>From local competition to the international stage.</h2>

            <p>
              <span className="gold">IFRPS</span> creates a connected competitive pathway where sanctioned
              results can contribute to international rankings and qualification
              opportunities without requiring every competitor to participate in
              the same local organization.
            </p>
          </div>

          <div className={styles.pathway}>
            <span>Local & Regional Play</span>
            <b aria-hidden="true">→</b>
            <span>Recognized Competition</span>
            <b aria-hidden="true">→</b>
            <span>International Elo</span>
            <b aria-hidden="true">→</b>
            <span>Majors & Championships</span>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="page-hero__eyebrow">Core Principles</p>
              <h2>What the federation is built around</h2>
            </div>
          </div>

          <div className={styles.principlesGrid}>
            <article className={`panel ${styles.principleCard}`}>
              <span>01</span>
              <h3>Competitive Integrity</h3>
              <p>
                Rankings and championships only have value when competition can
                be trusted.
              </p>
            </article>

            <article className={`panel ${styles.principleCard}`}>
              <span>02</span>
              <h3>Clear Standards</h3>
              <p>
                Players and organizers should know what qualifies as recognized
                international competition.
              </p>
            </article>

            <article className={`panel ${styles.principleCard}`}>
              <span>03</span>
              <h3>Collaboration</h3>
              <p>
                The international structure grows by working with organizations
                and communities across the sport.
              </p>
            </article>

            <article className={`panel ${styles.principleCard}`}>
              <span>04</span>
              <h3>Accessible Competition</h3>
              <p>
                In-person and verified remote competition can create a pathway
                for players regardless of geography.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}