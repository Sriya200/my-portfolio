import React, { useEffect, useRef, useState } from "react";

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

function SkillBar({ level = 60, fill = false, delay = 0 }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.style.width = fill ? `${level}%` : "6%";
    }, delay);
    return () => clearTimeout(t);
  }, [fill, level, delay]);

  return (
    <div
      style={{
        height: 10,
        background: "rgba(255,255,255,0.08)",
        borderRadius: 999,
        overflow: "hidden",
      }}
    >
      <div
        ref={barRef}
        style={{
          width: "6%",
          height: "100%",
          background: "linear-gradient(90deg,#7bd389,#5fd1ff)",
          transition: "width 900ms cubic-bezier(.16,.84,.26,1)",
          borderRadius: 999,
        }}
      />
    </div>
  );
}

export default function Skills() {
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [playFill, setPlayFill] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setPlayFill(true), 200);
        } else {
          setVisible(false);
          setPlayFill(false);
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className="snap-section"
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",            // ✅ FIX
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "72px 48px",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(42px, 8vw, 72px)",
          marginBottom: 48,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "all 700ms cubic-bezier(.16,.84,.26,1)",
        }}
      >
        Skills
      </h1>

      {/* Skill Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 40,

          /* ✅ MOBILE FIX */
          gridAutoRows: "min-content",
        }}
      >
        {skillGroups.map((grp, colIndex) => (
          <div
            key={grp.title}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: `all 700ms cubic-bezier(.16,.84,.26,1) ${colIndex * 120}ms`,
            }}
          >
            <h3 style={{ fontSize: 20, marginBottom: 18 }}>
              {grp.title}
            </h3>

            <div style={{ display: "grid", gap: 18 }}>
              {grp.items.map((it, i) => (
                <div key={it.name}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 8,
                      fontSize: 15,
                    }}
                  >
                    <span>{it.name}</span>
                    <span style={{ opacity: 0.6 }}>{it.level}%</span>
                  </div>

                  <SkillBar
                    level={it.level}
                    fill={playFill}
                    delay={colIndex * 120 + i * 70}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE OVERRIDES */}
      <style>{`
        @media (max-width: 900px) {
          section.snap-section {
            padding: 56px 20px;
          }

          section.snap-section > div {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
