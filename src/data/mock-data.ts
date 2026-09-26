import type {
  NewsItem,
  RankingEntry,
  TickerItem,
  Tournament,
} from "@/types";

import { players } from "@/data/players";
import { organizations } from "@/data/organizations";
import { memberships } from "@/data/memberships";


console.log("MEMBERSHIPS IMPORT:", memberships);

/* ---------------------------------
   Lookup Helpers
---------------------------------- */

export function getPlayerById(id: string) {
  const player = players.find((player) => player.id === id);

  if (!player) {
    throw new Error(`Player not found: ${id}`);
  }

  return player;
}

export function getOrganizationById(id: string) {
  const organization = organizations.find(
    (organization) => organization.id === id
  );

  if (!organization) {
    throw new Error(`Organization not found: ${id}`);
  }

  return organization;
}

export function getMembershipsByPlayerId(playerId: string) {
  return memberships.filter(
    (membership) => membership.playerId === playerId
  );
}

export function getMembershipsByOrganizationId(
  organizationId: string
) {
  return memberships.filter(
    (membership) => membership.organizationId === organizationId
  );
}

/* ---------------------------------
   Player References
---------------------------------- */

const alexCarter = getPlayerById("alex-carter");
const jordanReed = getPlayerById("jordan-reed");

/* ---------------------------------
   Ticker
---------------------------------- */

export const tickerItems: TickerItem[] = [
  {
    id: "t1",
    label: "DEVELOPMENT",
    text: "IFRPS frontend prototype — live data will replace these sample updates.",
  },
  {
    id: "t2",
    label: "WORLD #1",
    text: `${alexCarter.name} — 1842 Elo`,
    href: "/rankings",
  },
  {
    id: "t3",
    label: "MAJOR RESULT",
    text: `${jordanReed.name} wins the sample U.S. Open`,
    href: "/tournaments",
  },
  {
    id: "t4",
    label: "NEXT EVENT",
    text: "Virginia Open — sample event listing",
    href: "/tournaments",
  },
  {
    id: "t5",
    label: "RULES",
    text: "IFRPS Official Rules v1.0 available now",
    href: "/rules",
  },
];

/* ---------------------------------
   Rankings
---------------------------------- */

/*
  IFRPS international rankings are generated from
  memberships connected to the IFRPS organization.

  Organization-specific rankings can use the same
  membership data and their own Elo values.
*/

const internationalMemberships = memberships
  .filter(
    (membership) => membership.organizationId === "ifrps"
  )
  .sort((a, b) => b.elo - a.elo);

export const rankings: RankingEntry[] =
  internationalMemberships.map((membership, index) => {
    const player = getPlayerById(membership.playerId);

    const otherMembership = memberships.find(
      (item) =>
        item.playerId === player.id &&
        item.organizationId !== "ifrps"
    );

    const organization = otherMembership
      ? getOrganizationById(otherMembership.organizationId)
      : getOrganizationById("ifrps");

    return {
      rank: index + 1,
      player: player.name,
      slug: player.id,
      country: player.country,
      elo: membership.elo,
      movement: 0,
      organization: organization.name,
      qualified: index < 3,
    };
  });

/* ---------------------------------
   Organization Rankings
---------------------------------- */

export function getOrganizationRankings(
  organizationId: string
) {
  return getMembershipsByOrganizationId(organizationId)
    .sort((a, b) => b.elo - a.elo)
    .map((membership, index) => {
      const player = getPlayerById(membership.playerId);

      return {
        rank: index + 1,
        player: player.name,
        slug: player.id,
        country: player.country,
        elo: membership.elo,
        movement: 0,
        organization: getOrganizationById(
          organizationId
        ).name,
        qualified: false,
      };
    });
}

/* ---------------------------------
   Tournaments
---------------------------------- */

export const tournaments: Tournament[] = [
  {
    id: "vopen",
    name: "Virginia Open",
    organization: getOrganizationById("ifrps").name,
    date: "2026-10-17",
    location: "Virginia, USA",
    format: "Best of 3",
    level: "Major",
    status: "Upcoming",
  },
  {
    id: "canopen",
    name: "Canadian Open",
    organization: getOrganizationById("sample-na").name,
    date: "2026-09-12",
    location: "Toronto, Canada",
    format: "Best of 3",
    level: "Sanctioned",
    status: "Upcoming",
  },
  {
    id: "usopen",
    name: "U.S. Open",
    organization: getOrganizationById("sample-us").name,
    date: "2026-07-25",
    location: "Chicago, USA",
    format: "Best of 5 Final",
    level: "Major",
    status: "Completed",
    winner: jordanReed.name,
  },
];

/* ---------------------------------
   News
---------------------------------- */

export const newsItems: NewsItem[] = [
  {
    id: "n1",
    category: "Federation",
    organization: getOrganizationById("ifrps").name,
    title: "Official Rules v1.0 enters public review",
    summary:
      "The federation publishes its first unified competitive standard for Standard and Concealed Throw RPS.",
    date: "2026-08-22",
  },
  {
    id: "n2",
    category: "Tournament",
    organization: getOrganizationById("sample-us").name,
    title: `${jordanReed.name} captures sample U.S. Open title`,
    summary:
      "A development-data result demonstrating how recognized-organization victories will appear across IFRPS.",
    date: "2026-08-19",
  },
  {
    id: "n3",
    category: "Rankings",
    organization: getOrganizationById("ifrps").name,
    title: "International ranking interface enters development",
    summary:
      "Organization ratings and an independent international Elo will eventually appear together on player profiles.",
    date: "2026-08-16",
  },
];

/* ---------------------------------
   Re-exports
---------------------------------- */

export { organizations, players };