// src/components/Education/education.style.js
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  education: {
    height: "100vh",              // ✅ REQUIRED for snap
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    boxSizing: "border-box",

    background: "#000",
    color: "#fff",

    paddingTop: "96px",
    paddingBottom: "96px",

    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",         // ✅ vertical centering
    gap: "48px",

    overflow: "hidden",           // ✅ prevent bleed

    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      paddingTop: "72px",
      paddingBottom: "72px",
    },
  },

  /* LEFT COLUMN (TITLE) */
  left: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },

  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 200,
    fontSize: "clamp(48px, 8vw, 80px)",
    lineHeight: 1.05,
    margin: 0,
    color: "#fff",

    opacity: 0,
    transform: "translateY(-18px)",
    transition:
      "opacity 900ms cubic-bezier(.16,.84,.26,1), transform 900ms cubic-bezier(.16,.84,.26,1)",
  },

  /* RIGHT COLUMN (EDUCATION + WORK) */
  right: {
    display: "flex",
    flexDirection: "column",
    gap: 30,

    justifyContent: "center",     // ✅ CENTER CONTENT
    alignSelf: "center",          // ✅ ALIGN WITH TITLE
    maxWidth: 520,

    opacity: 0,
    transform: "translateX(20px)",
    transition:
      "opacity 900ms cubic-bezier(.16,.84,.26,1) 160ms, transform 900ms cubic-bezier(.16,.84,.26,1) 160ms",

    "@media (max-width: 1200px)": {
      transform: "translateX(18px)",
      maxWidth: 460,
    },

    "@media (max-width: 900px)": {
      transform: "translateX(0)",
      maxWidth: "100%",
    },
  },

  /* EACH BLOCK */
  block: {
    display: "grid",
    gridTemplateColumns: "39px 1fr",
    gap: 10,
    alignItems: "start",
    color: "rgba(255,255,255,0.95)",

    opacity: 0,
    transform: "translateY(12px)",
    transition:
      "opacity 700ms cubic-bezier(.22,.61,.36,1), transform 700ms cubic-bezier(.22,.61,.36,1)",

    "@media (max-width: 900px)": {
      gridTemplateColumns: "44px 1fr",
      gap: 14,
    },
  },

  arrowWrap: {
    width: 56,
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    transform: "translateY(4px)",

    "@media (max-width: 900px)": {
      width: 44,
      height: 44,
      transform: "translateY(2px)",
    },
  },

  blockTitle: {
    fontSize: 20,
    margin: 0,
    color: "#fff",
    fontWeight: 500,
    marginBottom: 10,
  },

  list: {
    margin: 0,
    paddingLeft: 22,
    color: "rgba(255,255,255,0.72)",
    fontSize: 15,
    lineHeight: 1.6,
    listStyleType: "disc",

    "& li": {
      marginBottom: 10,
      opacity: 0,
      transform: "translateY(6px)",
      transition: "opacity 520ms ease, transform 520ms ease",
    },
  },

  divider: {
    width: 120,
    height: 2,
    background: "rgba(255,255,255,0.04)",
    marginTop: 12,
  },

  show: {},

  /* ACCESSIBILITY */
  "@media (prefers-reduced-motion: reduce)": {
    title: { transition: "none", transform: "none", opacity: 1 },
    right: { transition: "none", transform: "none", opacity: 1 },
    block: { transition: "none", transform: "none", opacity: 1 },
    list: {
      "& li": { transition: "none", transform: "none", opacity: 1 },
    },
  },
});

export default useStyles;
