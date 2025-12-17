import React, { useEffect, useRef, useState } from "react";
import useStyles from "../components/About/about.style";

export default function About() {
  const s = useStyles();
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className={s.about} ref={rootRef} id="about">
      {/* LEFT CONTENT */}
      <div className={s.left}>
        <h1 className={`${s.title} ${visible ? s.titleVisible : ""}`}>
          Who is
          <br />
          Sriyanka?
        </h1>

        <p className={`${s.intro} ${visible ? s.introVisible : ""}`}>
          I&apos;m a Data Analyst and recent Information Science graduate with strong
          proficiency in SQL, Python, Excel, Tableau, and Power BI. Skilled at
          transforming complex datasets into clear, actionable insights that drive
          retention, increase revenue, and improve operational efficiency.
          Experienced in analyzing product performance, user engagement, and sales
          trends to support data-driven business strategies.
        </p>

        <div className={`${s.underline} ${visible ? s.underlineVisible : ""}`} />
      </div>

      {/* RIGHT SIDE CTA */}
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
