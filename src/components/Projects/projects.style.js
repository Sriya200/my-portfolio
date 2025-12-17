import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  projects: {
  height: "100%",              // 🔴 must match snap-section
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  boxSizing: "border-box",     // 🔴 REQUIRED

  background: "#000",
  color: "#fff",

  padding: "96px 48px",
  display: "flex",
  flexDirection: "column",
  gap: 48,

  overflow: "hidden",          // 🔴 prevents bleed to next section

  "@media (max-width: 900px)": {
    padding: "72px 20px",
  },
},

  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 300,
    fontSize: "clamp(40px, 6vw, 96px)",
    margin: 0,
  },

  tiles: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,

    "@media (max-width: 1000px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 700px)": {
      gridTemplateColumns: "1fr",
    },
  },

  tile: {
    opacity: 0,
    transform: "translateY(16px)",
    transition: "all 420ms cubic-bezier(.16,.84,.26,1)",
    borderRadius: 12,
    padding: 16,

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
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
    width: 96,
    height: 96,
    borderRadius: 12,
    background: "rgba(255,255,255,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  logoImg: {
    width: "70%",
    height: "70%",
    objectFit: "contain",
  },

  descWrap: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
  },

  arrowIcon: {
    fontSize: 18,
    opacity: 0.9,
  },

  short: {
    fontWeight: 600,
    fontSize: 15,
  },
});

export default useStyles;
