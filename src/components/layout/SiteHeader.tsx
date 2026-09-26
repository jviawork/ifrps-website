"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./SiteHeader.module.css";
import { primaryNavigation } from "@/config/navigation";


export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/?intro=1" aria-label="IFRPS home — replay intro">
        <Image
          src="/assets/branding/ifrps-crest.png"
          alt="IFRPS crest"
          width={170}
          height={170}
          priority
        />
      </Link>

      <button
        className={styles.menuButton}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={styles.menuButtonText}>Menu</span>
        <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>

      <nav
        id="primary-navigation"
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        aria-label="Main navigation"
      >
        {primaryNavigation.map((item) => {
          const current =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link className={`button button--primary ${styles.join}`} href="/register">
        Join
      </Link>
    </header>
  );
}
