import { TournamentCard } from "@/components/cards/TournamentCard";
import { tournaments } from "@/data/mock-data";

export const metadata = { title: "Tournaments" };

export default function TournamentsPage() {
  const upcoming = tournaments.filter((item) => item.status === "Upcoming");
  const completed = tournaments.filter((item) => item.status === "Completed");

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">Sanctioned Competition</p>
          <h1>Tournament Center</h1>
          <p className="page-hero__lead">
            One calendar and results archive for IFRPS-operated, sanctioned and recognized competition.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><h2>Upcoming</h2><p>Major designation will eventually be based on field size, certified officials, verification and competition standards.</p></div>
          <div className="card-grid">{upcoming.map((t) => <TournamentCard tournament={t} key={t.id} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><h2>Recent Results</h2></div>
          <div className="card-grid">{completed.map((t) => <TournamentCard tournament={t} key={t.id} />)}</div>
        </div>
      </section>
    </main>
  );
}
