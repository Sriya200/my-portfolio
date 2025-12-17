import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import useStyles from "./hero.style";

// Vite-safe image import
const portrait = new URL("../../assets/portrait.jpg", import.meta.url).href;

export default function Hero() {
  const s = useStyles();
  // const navigate = useNavigate();
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // initial reveal
  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(id);
  }, []);

  // replay animation when section re-enters viewport
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(false);
            setTimeout(() => setVisible(true), 40);
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // scroll-safe handler for Data Analyst
  const goToAbout = () => {
    const section = document.querySelector("#about.snap-section");
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div ref={rootRef} className={s.hero}>
      {/* LEFT */}
      <div className={s.left}>
        <h1 className={`${s.title} ${visible ? s.titleVisible : ""}`}>
          Welcome to
          <br />
          My Portfolio
        </h1>

        <div
          className={`${s.btnWrap} ${visible ? s.btnVisible : ""}`}
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          {/* Data Analyst */}
          <button className={s.pillBtn} onClick={goToAbout}>
            Data Analyst
          </button>

          {/* Software Developer */}
          {/* <button
            className={s.pillBtnSecondary}
            onClick={() => navigate("/sd")}
          >
            Software Developer
          </button> */}
        </div>
      </div>

      {/* RIGHT */}
      <div className={s.right}>
        <div
          className={`${s.ellipse} ${visible ? s.ellipseVisible : ""}`}
          aria-hidden
        >
          <img
            src={portrait}
            alt="Sriyanka portrait"
            className={s.portraitImg}
            draggable={false}
          />
        </div>
      </div>

      {/* CORNER CTA */}
      <a className={s.ctaCorner} href="#contact">
        ↳ Work with me today
      </a>
    </div>
  );
}
