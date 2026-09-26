import type { NewsItem } from "@/types";
import styles from "./Cards.module.css";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className={`panel ${styles.card}`}>
      <div className={styles.meta}>
        <span className="badge">{item.category}</span>
        <span>{item.organization}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <time dateTime={item.date}>{item.date}</time>
    </article>
  );
}
