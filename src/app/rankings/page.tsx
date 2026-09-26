"use client";

import { useMemo, useState } from "react";
import styles from "./rankings.module.css";

import {
  getOrganizationRankings,
  organizations,
  rankings,
} from "@/data/mock-data";

export default function RankingsPage() {
  const [selectedRanking, setSelectedRanking] =
    useState("ifrps");

  const selectedOrganization = useMemo(
    () =>
      organizations.find(
        (organization) => organization.id === selectedRanking
      ),
    [selectedRanking]
  );

  const displayedRankings = useMemo(() => {
    if (selectedRanking === "ifrps") {
      return rankings;
    }

    return getOrganizationRankings(selectedRanking);
  }, [selectedRanking]);

  const isInternational = selectedRanking === "ifrps";

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">
            {isInternational
              ? "International Elo"
              : "Organization Rankings"}
          </p>

          <h1>
            {isInternational
              ? "World Rankings"
              : selectedOrganization?.name}
          </h1>

          <p className="page-hero__lead">
            {isInternational
              ? "The IFRPS International Elo provides a unified ranking across recognized competitive play."
              : `Viewing the independent ranking and Elo ratings for ${selectedOrganization?.name}.`}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
         <div className={styles.rankingControls}>
  <label
    htmlFor="ranking-system"
    className={styles.rankingLabel}
  >
    Ranking System
  </label>

  <select
    id="ranking-system"
    className={styles.rankingSelect}
    value={selectedRanking}
    onChange={(event) =>
      setSelectedRanking(event.target.value)
    }
  >
    <option value="ifrps">
      IFRPS International
    </option>

    {organizations
      .filter(
        (organization) => organization.id !== "ifrps"
      )
      .map((organization) => (
        <option
          key={organization.id}
          value={organization.id}
        >
          {organization.name}
        </option>
      ))}
  </select>
</div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Player</th>
                  <th>Country</th>
                  <th>
                    {isInternational
                      ? "IFRPS Elo"
                      : "Organization Elo"}
                  </th>
                  <th>Movement</th>

                  {isInternational && (
                    <>
                      <th>Organization</th>
                      <th>Worlds</th>
                    </>
                  )}
                </tr>
              </thead>

              <tbody>
                {displayedRankings.map((entry) => (
                  <tr key={entry.slug}>
                    <td>#{entry.rank}</td>

                    <td>
                      <strong>{entry.player}</strong>
                    </td>

                    <td>{entry.country}</td>

                    <td>
                      <strong className="gold">
                        {entry.elo}
                      </strong>
                    </td>

                    <td>
                      {entry.movement > 0 &&
                        `▲ ${entry.movement}`}

                      {entry.movement < 0 &&
                        `▼ ${Math.abs(entry.movement)}`}

                      {entry.movement === 0 && "—"}
                    </td>

                    {isInternational && (
                      <>
                        <td>{entry.organization}</td>

                        <td>
                          {entry.qualified ? (
                            <span className="gold">
                              QUALIFIED
                            </span>
                          ) : (
                            "—"
                          )}
                        </td>
                      </>
                    )}
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