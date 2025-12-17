import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  contact: {
    minHeight: "100vh",
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    boxSizing: "border-box",

    background: "#000",
    color: "#fff",

    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },

  inner: {
    width: "100%",
    padding: "64px 48px",

    display: "grid",
    gridTemplateColumns: "1fr 360px",
    alignItems: "center",
    gap: 40,

    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      padding: "56px 20px",
      gap: 28,
    },
  },

  /* LEFT */
  left: {
    display: "flex",
    flexDirection: "column",
  },

  header: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "clamp(40px, 9vw, 80px)",
    lineHeight: 1,
    margin: 0,
    marginBottom: 28,

    opacity: 0,
    transform: "translateY(-20px)",
    transition:
      "opacity 700ms cubic-bezier(.16,.84,.26,1), transform 700ms cubic-bezier(.16,.84,.26,1)",
  },

  headerIn: {
    opacity: 1,
    transform: "translateY(0)",
  },

  ctaWrap: {
    display: "flex",
    marginTop: 12,
  },

  btnWrap: {
    position: "relative",
    width: "fit-content",
  },

  sendBtn: {
    padding: "14px 36px",
    borderRadius: 999,
    background: "#8c6b4a",
    border: "none",
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.25s ease",

    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 14px 30px rgba(140,107,74,0.45)",
    },
  },

  /* ACTION PANEL */
  actionsPanel: {
    position: "absolute",
    top: "calc(100% + 14px)",
    left: 0,

    width: 260,
    padding: 16,

    background: "rgba(20,20,20,0.95)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 14,

    display: "flex",
    flexDirection: "column",
    gap: 10,

    transform: "translateY(-6px)",
    opacity: 0,
    pointerEvents: "none",

    boxShadow: "0 18px 40px rgba(0,0,0,0.6)",
    transition: "all 0.25s ease",

    /* ✅ CRITICAL MOBILE FIX (NO OVERLAP) */
    "@media (max-width: 900px)": {
      position: "relative",
      top: "auto",
      left: "auto",
      width: "100%",
      marginTop: 14,
      boxShadow: "none",
    },
  },

  actionsOpen: {
    transform: "translateY(0)",
    opacity: 1,
    pointerEvents: "auto",
  },

  actionLink: {
    textAlign: "center",
    padding: "10px 14px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    fontWeight: 600,
    textDecoration: "none",

    "&:hover": {
      background: "rgba(255,255,255,0.16)",
    },
  },

  actionGhost: {
    padding: "8px 14px",
    borderRadius: 10,
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#ccc",
    cursor: "pointer",

    "&:hover": {
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
    },
  },

  /* RIGHT INFO */
  right: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  card: {
    background: "rgba(255,255,255,0.03)",
    padding: 16,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.05)",

    opacity: 0,
    transform: "translateY(14px)",
    transition:
      "opacity 600ms cubic-bezier(.22,.61,.36,1), transform 600ms cubic-bezier(.22,.61,.36,1)",
  },

  cardIn: {
    opacity: 1,
    transform: "translateY(0)",
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 4,
  },

  cardText: {
    fontSize: 14,
    opacity: 0.85,
    lineHeight: 1.5,
  },

  /* SOCIALS */
  socialsBottom: {
    gridColumn: "1 / -1",
    marginTop: 40,

    display: "flex",
    justifyContent: "center",
    gap: 16,

    opacity: 0,
    transform: "translateY(12px)",
    transition:
      "opacity 600ms cubic-bezier(.22,.61,.36,1), transform 600ms cubic-bezier(.22,.61,.36,1)",
  },

  socialsBottomIn: {
    opacity: 1,
    transform: "translateY(0)",
  },

  socialBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#fff",
    transition: "all 0.25s ease",

    "&:hover": {
      transform: "translateY(-4px)",
      background: "rgba(255,255,255,0.18)",
    },
  },

  "@media (prefers-reduced-motion: reduce)": {
    header: { opacity: 1, transform: "none" },
    card: { opacity: 1, transform: "none" },
    socialsBottom: { opacity: 1, transform: "none" },
  },
});

export default useStyles;
