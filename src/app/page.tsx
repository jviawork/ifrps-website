import Link from "next/link";
import { Suspense } from "react";
import { IntroAnimation } from "@/components/intro/IntroAnimation";
import { NewsCard } from "@/components/cards/NewsCard";
import { TournamentCard } from "@/components/cards/TournamentCard";
import { newsItems, rankings, tournaments } from "@/data/mock-data";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Suspense fallback={null}>
        <IntroAnimation />
      </Suspense>

      <main>
        <section className={styles.hero}>
          <div className="container">
            <p className={styles.eyebrow}>The game is simple. The competition is real.</p>
            <h1>
              International Federation of
              <span>Rock Paper Scissors</span>
            </h1>
            <p className={styles.lead}>
              One international home for rules, verified competition, rankings,
              recognized organizations and the future of competitive RPS.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary" href="/register">Join the Federation</Link>
              <Link className="button button--secondary" href="/competition">Explore Competition</Link>
            </div>
          </div>
        </section>
          
          {/* Homepage Stats Section */}
          <section className="section section--tight">
          <div className="container">
            <div className={styles.statGrid}>
              <div className="panel"><span>WORLD #1</span><strong>{rankings[0].player}</strong><small>{rankings[0].elo} Elo</small></div>
              <div className="panel"><span>NEXT MAJOR</span><strong>{tournaments[0].name}</strong><small>{tournaments[0].date}</small></div>
              <div className="panel"><span>OFFICIAL RULES</span><strong>Version 1.0</strong><small>Standard + Concealed Throw</small></div>
            </div>
          </div>
        </section>

        {/* mission of the federation */}
        <section className={styles.federationSection}>
  <div className="container">
    <div className={styles.federationIntro}>
      <p className="page-hero__eyebrow">The Federation</p>

      <h2>One game. One global standard.</h2>

      <p>
         <span className="gold">IFRPS</span> serves as the international governing and competitive 
         body for Rock Paper Scissors, bringing established and 
         emerging leagues and organizations together under one global 
         structure. Organizations retain their own identities, 
         communities, and competitions while participating in shared 
         standards for recognized international play. Competitions 
         meeting <span className="gold">IFRPS</span> standards contribute to a unified international 
         Elo ranking, creating a clear pathway from local competition 
         to the highest levels of the sport. <span className="gold">IFRPS</span> is also the central
         home for rankings, results, tournaments, organizations, and 
         news from across the global RPS community.
      </p>
    </div>

    <div className={styles.federationFeatures}>
      <div>
        <strong>Official Rules</strong>
        <span>One international competitive standard.</span>
      </div>

      <div>
        <strong>Unified Elo</strong>
        <span>International rankings across recognized competition.</span>
      </div>

      <div>
        <strong>Sanctioned Competition</strong>
        <span>Verified leagues, tournaments and Major events.</span>
      </div>

      <div>
        <strong>Recognized Organizations</strong>
        <span>One hub without erasing individual organizations.</span>
      </div>
    </div>

    <div className={styles.federationAction}>
      <Link className="button button--secondary" href="/about">
        <span>About</span>
        <span className="gold">IFRPS</span>
      </Link>
    </div>
  </div>
</section>

        {/* news section */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="page-hero__eyebrow">Around The Federation</p>
                <h2>Latest News</h2>
              </div>
              <Link className="gold" href="/news">View all news →</Link>
            </div>
            <div className="card-grid">
              {newsItems.map((item) => <NewsCard item={item} key={item.id} />)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="page-hero__eyebrow">Competitions</p>
                <h2>Events & Results</h2>
              </div>
              <Link className="gold" href="/tournaments">Tournament center →</Link>
            </div>
            <div className="card-grid">
              {tournaments.map((tournament) => (
                <TournamentCard tournament={tournament} key={tournament.id} />
              ))}
            </div>
          </div>
        </section>

                  {/* ranking section */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="page-hero__eyebrow">International ELO</p>
                <h2>World Rankings</h2>
              </div>
              <Link className="gold" href="/rankings">Full rankings →</Link>
            </div>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr><th>Rank</th><th>Player</th><th>Country</th><th>Elo</th><th>Organization</th></tr>
                </thead>
                <tbody>
                  {rankings.slice(0, 5).map((row) => (
                    <tr key={row.slug}>
                      <td>#{row.rank}</td>
                      <td><Link href={`/players/${row.slug}`}>{row.player}</Link></td>
                      <td>{row.country}</td>
                      <td className="gold"><strong>{row.elo}</strong></td>
                      <td>{row.organization}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
