import React, { useEffect, useRef, useState } from "react";
import useStyles from "../components/About/about.style";

export default function About() {
  const s = useStyles();
  const rootRef = useRef(null);
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 🔥 FORCE REMOUNT → animation ALWAYS runs
          setPlayKey((k) => k + 1);
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className={s.about} ref={rootRef} id="about">
      <div className={s.left}>
        {/* 🔑 key forces remount */}
        <h1 key={`title-${playKey}`} className={s.title}>
          Who is
          <br />
          Sriyanka?
        </h1>

        <p key={`intro-${playKey}`} className={s.intro}>
          I&apos;m a Data Analyst and recent Information Science graduate with strong
          proficiency in SQL, Python, Excel, Tableau, and Power BI. Skilled at
          transforming complex datasets into clear, actionable insights that drive
          retention, increase revenue, and improve operational efficiency.
          Experienced in analyzing product performance, user engagement, and sales
          trends to support data-driven business strategies.
        </p>

        <div key={`underline-${playKey}`} className={s.underline} />
      </div>

      <div className={s.right}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={s.cvBtn}
        >
          Check out CV
        </a>
      </div>
    </section>
  );
}
