import type { Tournament } from "@/types";
import styles from "./Cards.module.css";

export function TournamentCard({ tournament }: { tournament: Tournament }) {
  return (
    <article className={`panel ${styles.card}`}>
      <div className={styles.meta}>
        <span className="badge">{tournament.level}</span>
        <span>{tournament.organization}</span>
      </div>
      <h3>{tournament.name}</h3>
      <p>{tournament.location} · {tournament.format}</p>
      <p className={styles.result}>
        {tournament.status === "Completed"
          ? `Winner: ${tournament.winner ?? "TBD"}`
          : `Upcoming: ${tournament.date}`}
      </p>
    </article>
  );
}
