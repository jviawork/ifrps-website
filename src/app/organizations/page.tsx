import Link from "next/link";

import { organizations } from "@/data/organizations";

export default function OrganizationsPage() {
  const recognizedOrganizations = organizations.filter(
    (organization) => organization.id !== "ifrps"
  );

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">
            Federation Network
          </p>

          <h1>Recognized Organizations</h1>

          <p className="page-hero__lead">
            IFRPS connects independent Rock Paper Scissors
            organizations through a shared international
            competitive structure while allowing each
            organization to maintain its own identity,
            community, and events.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="page-hero__eyebrow">
              Federation Structure
            </p>

            <h2>Organizations within the IFRPS network</h2>

            <p>
              Recognized organizations can host qualifying
              competition, maintain their own rankings, and
              contribute verified results toward the IFRPS
              international system.
            </p>
          </div>

          <div className="card-grid">
            {recognizedOrganizations.map((organization) => (
              <article
                key={organization.id}
                className="panel"
              >
                <p className="page-hero__eyebrow">
                  {organization.status}
                </p>

                <h3>{organization.name}</h3>

                <p>{organization.region}</p>

                {organization.isSample && (
                  <p className="gold">
                    SAMPLE ORGANIZATION
                  </p>
                )}

                <Link
                  className="button button--secondary"
                  href={`/organizations/${organization.id}`}
                >
                  View Organization
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}