// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  const styles = {
    page: {
      background: "#000",
      color: "#fff",
      minHeight: "80vh",
      padding: "40px 20px",
      fontFamily: "Inter, system-ui, Arial, sans-serif",
    },

    container: {
      maxWidth: 1100,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: 24,
      alignItems: "center",
    },

    title: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "clamp(28px, 5vw, 56px)",
      margin: "6px 0 18px",
    },

    desc: {
      color: "rgba(255,255,255,0.9)",
      lineHeight: 1.7,
      fontSize: 16,
    },

    links: {
      marginTop: 18,
    },

    linkItem: {
      color: "#59bfff",
      display: "block",
      margin: "8px 0 0",
      textDecoration: "none",
    },

    logoWrap: {
      width: "100%",
      maxWidth: 280,
      height: 280,
      borderRadius: "999px",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      margin: "30px auto 0",
      boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
    },

    logoImg: {
      width: "70%",
      height: "70%",
      objectFit: "contain",
    },

    backBtn: {
      marginTop: 36,
      borderRadius: 8,
      padding: "10px 16px",
      background: "transparent",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.12)",
      cursor: "pointer",
    },
  };

  if (!project) {
    return (
      <main style={styles.page}>
        <section style={{ maxWidth: 900, margin: "120px auto", textAlign: "center" }}>
          <h2>Project not found</h2>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>
            We couldn't find a project with id “{id}”.
          </p>
          <button style={styles.backBtn} onClick={() => navigate(-1)}>
            ← Back
          </button>
        </section>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <section style={styles.container}>
        
        {/* LEFT */}
        <div>
          <h1 style={styles.title}>{project.title}</h1>

          {project.long && <p style={styles.desc}>{project.long}</p>}

          <h3 style={{ marginTop: 28 }}>Business Insights</h3>
          <p style={styles.desc}>{project.short}</p>

          <h3 style={{ marginTop: 22 }}>Links & files</h3>
          <div style={styles.links}>
            {project.links?.code_python && (
              <a style={styles.linkItem} href={project.links.code_python} target="_blank" rel="noreferrer">
                • Python code / Notebook
              </a>
            )}
            {project.links?.code_sql && (
              <a style={styles.linkItem} href={project.links.code_sql} target="_blank" rel="noreferrer">
                • SQL scripts
              </a>
            )}
            {project.links?.tableau && (
              <a style={styles.linkItem} href={project.links.tableau} target="_blank" rel="noreferrer">
                • Tableau dashboard
              </a>
            )}
            {project.links?.report_pdf && (
              <a style={styles.linkItem} href={project.links.report_pdf} target="_blank" rel="noreferrer">
                • Project report (PDF)
              </a>
            )}
          </div>

          <button
            style={styles.backBtn}
            onClick={() => {
              navigate("/", { replace: true });
              setTimeout(() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 50);
            }}
          >
            ← Back to Projects
          </button>
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={styles.logoWrap}>
            <img
              src={project.imgPath || project.img}
              alt={project.title}
              style={styles.logoImg}
            />
          </div>
        </div>
      </section>
    </main>
  );
}