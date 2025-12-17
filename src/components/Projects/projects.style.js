// src/components/Projects/projects.style.js
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  projects: {
    minHeight: "100vh",          // ✅ snap-safe
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    boxSizing: "border-box",

    background: "#000",
    color: "#fff",

    padding: "72px 48px",        // ✅ balanced padding
    display: "flex",
    flexDirection: "column",
    gap: 40,

    overflow: "hidden",

    "@media (max-width: 900px)": {
      padding: "56px 20px",
      gap: 32,
    },
  },

  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 300,
    fontSize: "clamp(36px, 7vw, 84px)",
    margin: 0,
    lineHeight: 1.05,
  },

  tiles: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,

    "@media (max-width: 1100px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (max-width: 700px)": {
      gridTemplateColumns: "1fr",
      gap: 20,
    },
  },

  tile: {
    opacity: 0,
    transform: "translateY(14px)",
    transition: "opacity 420ms cubic-bezier(.16,.84,.26,1), transform 420ms cubic-bezier(.16,.84,.26,1)",
    borderRadius: 14,
    padding: 16,
    background: "rgba(255,255,255,0.02)",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 18px 42px rgba(0,0,0,0.55)",
    },
  },

  show: {
    opacity: 1,
    transform: "translateY(0)",
  },

  projectLink: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    gap: 16,
    alignItems: "center",
  },

  logoWrap: {
    width: 88,
    height: 88,
    borderRadius: 14,
    background: "rgba(255,255,255,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,

    "@media (max-width: 700px)": {
      width: 72,
      height: 72,
    },
  },

  logoImg: {
    width: "68%",
    height: "68%",
    objectFit: "contain",
  },

  descWrap: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
  },

  arrowIcon: {
    fontSize: 18,
    opacity: 0.85,
    marginTop: 2,
  },

  short: {
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 1.4,
  },

  /* accessibility */
  "@media (prefers-reduced-motion: reduce)": {
    tile: {
      transition: "none",
      transform: "none",
      opacity: 1,
    },
  },
});

export default useStyles;
