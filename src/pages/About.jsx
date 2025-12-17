import React, { useEffect, useRef } from "react";
import useStyles from "../components/About/about.style";

// Vite-safe resume import

export default function About() {
  const s = useStyles();
  const rootRef = useRef(null);

  const restartAnimations = () => {
    if (!rootRef.current) return;
    const items = rootRef.current.querySelectorAll("[data-anim]");
    items.forEach((el) => {
      el.style.animation = "none";
      el.style.transition = "none";
    });
    void document.body.offsetWidth; // force reflow
    items.forEach((el) => {
      el.style.animation = "";
      el.style.transition = "";
    });
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(restartAnimations, 40);
          }
        });
      },
      { threshold: 0.18 }
    );

    io.observe(el);

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          restartAnimations();
        }
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("focus", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("focus", onVisibility);
    };
  }, []);

  return (
    <section className={s.about} ref={rootRef} id="about">
      {/* LEFT CONTENT */}
      <div className={s.left}>
        <h1 className={s.title} data-anim="title">
          Who is
          <br />
          Sriyanka?
        </h1>

        <p className={s.intro} data-anim="intro">
          I&apos;m a Data Analyst and recent Information Science graduate with strong
          proficiency in SQL, Python, Excel, Tableau, and Power BI. Skilled at
          transforming complex datasets into clear, actionable insights that drive
          retention, increase revenue, and improve operational efficiency.
          Experienced in analyzing product performance, user engagement, and sales
          trends to support data-driven business strategies.
        </p>

        <div className={s.underline} data-anim="underline" />
      </div>

      {/* RIGHT SIDE CTA */}
      <div className={s.right} data-anim="cta">
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
