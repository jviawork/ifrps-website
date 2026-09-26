import Image from "next/image";
import Link from "next/link";
import { primaryNavigation } from "@/config/navigation";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Image
            src="/assets/branding/ifrps-crest.png"
            alt=""
            width={90}
            height={90}
          />

          <div>
            <strong>
              International Federation of{" "}
              <span className="gold">Rock Paper Scissors</span>
            </strong>

            <p>Three throws. One standard.</p>
          </div>
        </div>

        <nav aria-label="Footer navigation" className={styles.links}>
          {primaryNavigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}

          <Link href="/register"><span className="gold">Join</span></Link>
        </nav>
      </div>

      <div className={styles.legal}>
        © 2026 IFRPS. Front-end prototype; rankings and event data shown in
        development are sample data unless identified otherwise.
      </div>
    </footer>
  );
}