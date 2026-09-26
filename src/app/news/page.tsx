import { NewsCard } from "@/components/cards/NewsCard";
import { newsItems } from "@/data/mock-data";

export const metadata = { title: "News" };

export default function NewsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">Around the Federation</p>
          <h1>RPS News</h1>
          <p className="page-hero__lead">
            Federation updates, recognized-organization results, tournament winners and ranking news in one place.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card-grid">{newsItems.map((item) => <NewsCard item={item} key={item.id} />)}</div>
        </div>
      </section>
    </main>
  );
}
