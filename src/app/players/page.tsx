import Link from "next/link";
import { rankings } from "@/data/mock-data";

export const metadata = { title: "Players" };

export default function PlayersPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">Competitor Directory</p>
          <h1>Players</h1>
          <p className="page-hero__lead">Development player directory. Profiles will eventually combine organization ratings, IFRPS Elo, results, titles and qualification status.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="table-wrap">
            <table className="data-table">
              <thead><tr><th>Player</th><th>Country</th><th>Rank</th><th>Elo</th><th>Organization</th></tr></thead>
              <tbody>
                {rankings.map((p) => (
                  <tr key={p.slug}>
                    <td><Link href={`/players/${p.slug}`}><strong>{p.player}</strong></Link></td>
                    <td>{p.country}</td><td>#{p.rank}</td><td className="gold">{p.elo}</td><td>{p.organization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
