// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData"; // <-- named import (matches export)

// Simple inline styles used to avoid JSS import errors in HMR
const styles = {
  page: { background: "#000", color: "#fff", minHeight: "80vh", padding: "72px 48px", fontFamily: "Inter, system-ui, Arial, sans-serif" },
  container: { maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: 48, alignItems: "start" },
  title: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 3.8vw, 56px)", margin: "6px 0 18px" },
  desc: { color: "rgba(255,255,255,0.9)", lineHeight: 1.8, fontSize: 18 },
  links: { marginTop: 18 },
  linkItem: { color: "#59bfff", display: "block", margin: "8px 0 0", textDecoration: "none" },
  logoWrap: {
    width: 320,
    height: 320,
    borderRadius: 999,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginLeft: "auto",
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
  },
  logoImg: { width: "70%", height: "70%", objectFit: "contain", display: "block" },
  backBtn: {
    marginTop: 36,
    borderRadius: 8,
    padding: "10px 16px",
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.12)",
    cursor: "pointer",
  },
  '@mediaMobile': { containerMobile: { gridTemplateColumns: "1fr" } },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // find project
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main style={styles.page}>
        <section style={{ maxWidth: 900, margin: "120px auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff" }}>Project not found</h2>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>We couldn't find a project with id “{id}”.</p>
          <button style={styles.backBtn} onClick={() => navigate(-1)}>← Back</button>
        </section>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <section style={styles.container}>
        <div>
          <h1 style={styles.title}>{project.title}</h1>

          {project.long && <p style={styles.desc}>{project.long}</p>}

          <h3 style={{ marginTop: 28, marginBottom: 8 }}>Business Insights</h3>
          <p style={{ color: "rgba(255,255,255,0.9)", marginTop: 6 }}>{project.short}</p>

          <h3 style={{ marginTop: 22, marginBottom: 8 }}>Links & files</h3>
          <div style={styles.links}>
            {project.links?.code_python && <a style={styles.linkItem} href={project.links.code_python} target="_blank" rel="noreferrer">• Python code / Notebook</a>}
            {project.links?.code_sql && <a style={styles.linkItem} href={project.links.code_sql} target="_blank" rel="noreferrer">• SQL scripts</a>}
            {project.links?.tableau && <a style={styles.linkItem} href={project.links.tableau} target="_blank" rel="noreferrer">• Tableau dashboard</a>}
            {project.links?.report_pdf && <a style={styles.linkItem} href={project.links.report_pdf} target="_blank" rel="noreferrer">• Project report (PDF)</a>}
          </div>

          <div>
           <button
  style={styles.backBtn}
  onClick={() => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const el = document.getElementById("projects");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }}
>
  ← Back to Projects
</button>

          </div>
        </div>

        {/* Right column: round logo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={styles.logoWrap}>
            <img src={project.imgPath || project.img} alt={project.title} style={styles.logoImg} />
          </div>
        </div>
      </section>
    </main>
  );
}
