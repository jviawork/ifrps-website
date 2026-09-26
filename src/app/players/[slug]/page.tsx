import { notFound } from "next/navigation";
import { rankings } from "@/data/mock-data";
import styles from "./profile.module.css";

export function generateStaticParams() {
  return rankings.map((player) => ({ slug: player.slug }));
}

export default async function PlayerProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const player = rankings.find((entry) => entry.slug === slug);

  if (!player) notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">Player Profile</p>
          <h1>{player.player}</h1>
          <p className="page-hero__lead">{player.country} · {player.organization}</p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <article className={`panel ${styles.stat}`}><span>WORLD RANK</span><strong>#{player.rank}</strong></article>
          <article className={`panel ${styles.stat}`}><span>IFRPS ELO</span><strong>{player.elo}</strong></article>
          <article className={`panel ${styles.stat}`}><span>WORLDS STATUS</span><strong>{player.qualified ? "Qualified" : "Not Yet Qualified"}</strong></article>
        </div>
      </section>
    </main>
  );
}
