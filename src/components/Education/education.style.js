// src/components/Education/education.style.js
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
 education: {
  minHeight: "100vh",
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  boxSizing: "border-box",

  background: "#000",
  color: "#fff",

  padding: "72px 48px",

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  gap: "48px",

  overflow: "hidden",

  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
    padding: "56px 20px",
  },
},


  /* LEFT (TITLE) */
  left: {
    display: "flex",
    alignItems: "center",
    height: "100%",

    "@media (max-width: 900px)": {
      justifyContent: "center",
      height: "auto",
      marginBottom: 40,
    },
  },

  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 300,
    fontSize: "clamp(42px, 9vw, 80px)",
    lineHeight: 1.05,
    margin: 0,
    color: "#fff",

    "@media (max-width: 900px)": {
      textAlign: "center",
    },
  },

  /* RIGHT CONTENT */
  right: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
    maxWidth: 520,

    "@media (max-width: 900px)": {
      maxWidth: "100%",
      gap: 36,
    },
  },

  block: {
    display: "grid",
    gridTemplateColumns: "32px 1fr",
    gap: 12,
    alignItems: "start",

    "@media (max-width: 900px)": {
      gridTemplateColumns: "28px 1fr",
    },
  },

  arrowWrap: {
    width: 32,
    height: 32,
    color: "#e6d1b6",
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
    paddingLeft: 20,
    color: "rgba(255,255,255,0.72)",
    fontSize: 15,
    lineHeight: 1.6,

    "& li": {
      marginBottom: 10,
    },
  },

  divider: {
    width: 120,
    height: 2,
    background: "rgba(255,255,255,0.08)",
    marginTop: 14,
  },
});

export default useStyles;
