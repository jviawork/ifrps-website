import Link from "next/link";
import { tickerItems } from "@/data/mock-data";
import styles from "./FederationTicker.module.css";

function TickerSequence({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className={styles.sequence} aria-hidden={hidden || undefined}>
      {tickerItems.map((item) => {
        const content = (
          <>
            <strong>{item.label}</strong>
            <span>{item.text}</span>
          </>
        );

        return item.href ? (
          <Link className={styles.item} href={item.href} key={`${hidden ? "copy-" : ""}${item.id}`}>
            {content}
          </Link>
        ) : (
          <span className={styles.item} key={`${hidden ? "copy-" : ""}${item.id}`}>
            {content}
          </span>
        );
      })}
    </div>
  );
}

export function FederationTicker() {
  return (
    <section className={styles.ticker} aria-label="IFRPS latest updates">
      <div className={styles.label}>IFRPS LIVE</div>
      <div className={styles.window} tabIndex={0}>
        <div className={styles.track}>
          <TickerSequence />
          <TickerSequence hidden />
        </div>
      </div>
    </section>
  );
}
