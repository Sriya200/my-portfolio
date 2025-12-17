import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  about: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    boxSizing: "border-box",

    display: "grid",
    gridTemplateColumns: "1fr 360px",
    alignItems: "center",
    gap: 48,

    padding: "72px 48px",
    background: "#000",
    color: "#fff",
    overflow: "hidden",

    "@media (min-width: 901px)": {
      minHeight: "100vh",
    },

    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      padding: "96px 20px 72px",
      gap: 40,
      minHeight: "auto",
    },
  },

  /* LEFT */
  left: {
    maxWidth: 760,

    "@media (max-width: 900px)": {
      maxWidth: "100%",
      textAlign: "center",
    },
  },

  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 400,
    fontSize: "clamp(42px, 9vw, 80px)",
    lineHeight: 1,
    margin: 0,
    color: "#fff",

    /* 🔥 animation lives HERE */
    animation: "$titleIn 1.2s cubic-bezier(.16,.84,.26,1) forwards",

    "@media (max-width: 900px)": {
      fontSize: "clamp(36px, 10vw, 56px)",
    },
  },

  intro: {
    marginTop: 28,
    maxWidth: 720,
    fontSize: "clamp(16px, 1.6vw, 20px)",
    lineHeight: 1.7,
    color: "#8d8981",

    animation: "$copyIn 1s ease-out 0.18s forwards",

    "@media (max-width: 900px)": {
      marginTop: 18,
      maxWidth: "100%",
    },
  },

  underline: {
    width: 120,
    height: 2,
    background: "rgba(255,255,255,0.85)",
    marginTop: 28,
    transformOrigin: "left center",

    animation: "$underlineIn 0.9s ease-out 0.38s forwards",

    "@media (max-width: 900px)": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  /* RIGHT */
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "@media (max-width: 900px)": {
      marginTop: 12,
    },
  },

  cvBtn: {
    padding: "16px 44px",
    borderRadius: 999,
    fontSize: 18,
    fontWeight: 600,
    color: "#fff",
    background: "linear-gradient(135deg, #8c6b4a, #b08a63)",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",

    boxShadow: "0 12px 30px rgba(176,138,99,0.35)",
    transition: "all 0.35s cubic-bezier(.22,.61,.36,1)",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 22px 44px rgba(176,138,99,0.5)",
    },

    "&:active": {
      transform: "translateY(-2px) scale(0.98)",
    },

    "@media (max-width: 900px)": {
      fontSize: 16,
      padding: "14px 36px",
    },
  },

  /* KEYFRAMES */
  "@keyframes titleIn": {
    "0%": { opacity: 0, transform: "translateY(-30px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },

  "@keyframes copyIn": {
    "0%": { opacity: 0, transform: "translateY(12px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },

  "@keyframes underlineIn": {
    "0%": { opacity: 0, transform: "scaleX(0)" },
    "100%": { opacity: 1, transform: "scaleX(1)" },
  },

  "@media (prefers-reduced-motion: reduce)": {
    title: { animation: "none", opacity: 1, transform: "none" },
    intro: { animation: "none", opacity: 1, transform: "none" },
    underline: { animation: "none", opacity: 1, transform: "none" },
  },
});

export default useStyles;
