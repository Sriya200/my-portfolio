// src/pages/Education.jsx
import React, { useEffect, useRef, useState } from "react";
import useStyles from "../components/Education/education.style";

// small curved arrow svg (unchanged)
const Arrow = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7c3.5-3.5 9.5-3.5 13 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 2v5h-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Education() {
  const s = useStyles();
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const educationItems = [
    "Data Analyst Fellowship from Nextleap, 2025",
    "BE in Information Science and Engineering from EPCET, 2024",
  ];

  const experienceItems = [
    "Data Analyst, Pinspire, 2025",
    "Intern, Salesforce, 2023",
  ];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.18) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: [0, 0.12, 0.18, 0.5] }
    );

    io.observe(el);

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setVisible(isVisible);
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

  // helper to compute delays for list items
  const computeListDelay = (blockIndex, itemIndex) => 260 + blockIndex * 180 + itemIndex * 80;

  return (
  <div className={s.education} ref={rootRef}>
        <div className={s.left}>
          <h1
            className={s.title}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-18px)",
            }}
          >
            My Background
          </h1>
        </div>

        <div
          className={s.right}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(36px)",
          }}
        >
          {[{ title: "Education", items: educationItems }, { title: "Work Experience", items: experienceItems }].map((block, bi) => (
            <div
              key={block.title}
              className={s.block}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${160 + bi * 160}ms`,
              }}
            >
              <div className={s.arrowWrap} aria-hidden>
                <Arrow size={28} />
              </div>

              <div>
                <h3 className={s.blockTitle}>{block.title}</h3>

                <ul className={s.list}>
                  {block.items.map((it, idx) => (
                    <li
                      key={idx}
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(6px)",
                        transitionDelay: `${computeListDelay(bi, idx)}ms`,
                      }}
                    >
                      {it}
                    </li>
                  ))}
                </ul>

                <div className={s.divider} />
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
