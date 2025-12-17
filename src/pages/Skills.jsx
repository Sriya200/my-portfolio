// src/pages/Skills.jsx
import React, { useEffect, useRef, useState } from "react";

/*
  Skills page with animations:
   - heading slides in
   - columns fade/slide in with stagger
   - skill bars fill to level when section is visible (intersection observer)
*/

const skillGroups = [
  {
    title: "Core / Technical",
    items: [
      { name: "SQL (PostgreSQL, MySQL, AWS Athena)", level: 90 },
      { name: "Python (Pandas, NumPy, Jupyter)", level: 85 },
      { name: "Tableau / Power BI", level: 82 },
      { name: "Excel (Pivot, Power Query)", level: 88 },
    ],
  },
  {
    title: "Analysis & Engineering",
    items: [
      { name: "Data Cleaning & ETL", level: 86 },
      { name: "Data Modeling & Metrics", level: 80 },
      { name: "Scripting & Automation", level: 76 },
      { name: "Basic DevOps (git, pipelines)", level: 65 },
    ],
  },
  {
    title: "Other / Soft",
    items: [
      { name: "Stakeholder Communication", level: 90 },
      { name: "Product & Business Thinking", level: 85 },
      { name: "Dashboard Storytelling", level: 88 },
    ],
  },
];

// small presentational SkillBar that animates width on `fill` prop
function SkillBar({ level = 60, fill = false, delay = 0 }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    // apply with a slight delay for nicer stagger
    const t = setTimeout(() => {
      el.style.width = fill ? `${level}%` : "4%";
    }, delay);
    return () => clearTimeout(t);
  }, [fill, level, delay]);

  return (
    <div
      style={{
        height: 10,
        background: "rgba(255,255,255,0.06)",
        borderRadius: 999,
        overflow: "hidden",
      }}
    >
      <div
        ref={barRef}
        style={{
          width: "4%",
          height: "100%",
          background: "linear-gradient(90deg,#7bd389,#5fd1ff)",
          transition: "width 900ms cubic-bezier(.16,.84,.26,1)",
          borderRadius: 999,
          willChange: "width",
        }}
      />
    </div>
  );
}

export default function Skills() {
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(false); // whether the section is in view
  const [playFill, setPlayFill] = useState(false); // when true, bars will fill

  // IntersectionObserver to toggle animations when section is visible
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // delay a tiny bit so heading animation finishes
            setVisible(true);
            // fill bars after heading/column reveal
            setTimeout(() => setPlayFill(true), 220);
          } else {
            // when leaving viewport, reset animations so they can replay
            setVisible(false);
            setPlayFill(false);
          }
        });
      },
      { threshold: 0.22 }
    );

    io.observe(el);

    // also restart when page becomes visible (tab focus)
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          setVisible(true);
          setTimeout(() => setPlayFill(true), 220);
        } else {
          setVisible(false);
          setPlayFill(false);
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
    <section
  ref={rootRef}
  className="snap-section"
  style={{
    background: "#000",
    color: "#fff",
    height: "100%",
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    boxSizing: "border-box",
    padding: "72px 48px",
    overflow: "hidden",
  }}
    >
      {/* small inline CSS for keyframes and accessibility-friendly prefers-reduced-motion */}
      <style>{`
        @keyframes slideDownFade {
          0% { opacity: 0; transform: translateY(-18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes colFade {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* reduce motion fallback */
        @media (prefers-reduced-motion: reduce) {
          .animated { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            margin: "8px 0 36px",
            color: "#fff",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 700ms cubic-bezier(.16,.84,.26,1), transform 700ms cubic-bezier(.16,.84,.26,1)",
            willChange: "opacity, transform",
          }}
        >
          Skills
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 48,
          }}
        >
          {skillGroups.map((grp, colIndex) => {
            // stagger delay for columns
            const colDelay = colIndex * 120;
            return (
              <div
                key={grp.title}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transition: `opacity 700ms cubic-bezier(.16,.84,.26,1) ${colDelay}ms, transform 700ms cubic-bezier(.16,.84,.26,1) ${colDelay}ms`,
                }}
              >
                <h3 style={{ fontSize: 20, margin: "6px 0 18px", fontWeight: 500 }}>{grp.title}</h3>

                <div style={{ display: "grid", gap: 18 }}>
                  {grp.items.map((it, i) => (
                    <div key={it.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <div style={{ fontSize: 16, color: "rgba(255,255,255,0.95)" }}>{it.name}</div>
                        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{it.level}%</div>
                      </div>

                      {/* pass a delay to each bar so each fills slightly staggered */}
                      <SkillBar level={it.level} fill={playFill} delay={colDelay + i * 60} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
