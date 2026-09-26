"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./IntroAnimation.module.css";

export function IntroAnimation() {
  const searchParams = useSearchParams();
  const forceReplay = searchParams.get("intro") === "1";
  const [visible, setVisible] = useState(false);
  const [impact, setImpact] = useState(false);

  useEffect(() => {
    const hasSeen = window.sessionStorage.getItem("ifrps-intro-seen");
    const shouldShow = forceReplay || !hasSeen;

    if (!shouldShow) return;

    setVisible(true);
    window.sessionStorage.setItem("ifrps-intro-seen", "1");

    const impactTimer = window.setTimeout(() => setImpact(true), 4320);
    const closeTimer = window.setTimeout(() => setVisible(false), 6500);

    return () => {
      window.clearTimeout(impactTimer);
      window.clearTimeout(closeTimer);
    };
  }, [forceReplay]);

  if (!visible) return null;

  return (
    <div className={`${styles.screen} ${impact ? styles.impact : ""}`} aria-hidden="true">
      <button className={styles.skip} type="button" onClick={() => setVisible(false)}>
        Skip Intro
      </button>

      <div className={styles.stage}>
        <Image className={`${styles.object} ${styles.paper}`} src="/assets/icons/paper.svg" alt="" width={300} height={300} priority />
        <Image className={`${styles.object} ${styles.scissors}`} src="/assets/icons/scissors.svg" alt="" width={320} height={320} priority />
        <Image className={`${styles.object} ${styles.rock}`} src="/assets/icons/rock.svg" alt="" width={380} height={380} priority />

        <div className={styles.flash} />
        <div className={`${styles.dust} ${styles.dustA}`} />
        <div className={`${styles.dust} ${styles.dustB}`} />
        <div className={`${styles.dust} ${styles.dustC}`} />

        <p className={styles.logoText}>IFRPS</p>
        <p className={styles.tagline}>The game is simple. The competition is real.</p>
      </div>
    </div>
  );
}
