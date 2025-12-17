// src/components/Contact/contact.style.js
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
 contact: {
  height: "100%",
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  boxSizing: "border-box",

  background: "#000",
  color: "#fff",

  display: "block",
  overflow: "hidden",
},

inner: {
  maxWidth: 1200,
  margin: "0 auto",

  paddingTop: "72px",
  paddingBottom: "80px",

  display: "grid",
  gridTemplateColumns: "1fr 360px",
  alignItems: "start",
  gap: 32,

  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
    gap: 24,
    paddingTop: "64px",
    paddingBottom: "72px",
  },
},

  left: { display: "flex", flexDirection: "column" },

  /** -------------------------
   ** HEADER (BIG & ANIMATED)
   ** ------------------------ */
  header: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "clamp(48px, 9vw, 80px)",
    lineHeight: 0.95,
    marginTop: 0,        // 👈 force start at top
    marginBottom: "32px",
    transform: "translateX(-60px)",
    opacity: 0,
    transition: "transform 800ms cubic-bezier(.16,.84,.26,1), opacity 600ms ease"
  },

  headerIn: {
    transform: "translateX(0)",
    opacity: 1
  },

  /** -------------------------
   ** CTA / SEND MESSAGE
   ** ------------------------ */
  ctaWrap: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 16
  },

  btnWrap: { position: "relative", display: "inline-block" },

  sendBtn: {
    padding: "14px 38px",
    borderRadius: 999,
    background: "#8c6b4a",
    border: "none",
    color: "#fff",
    fontSize: 17,
    fontWeight: 700,
    cursor: "pointer",
    transition: "0.25s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 16px 34px rgba(0,0,0,0.45)"
    }
  },

  actionsPanel: {
    position: "absolute",
    top: "calc(100% + 12px)",
    left: 0,
    width: 260,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: 14,
    borderRadius: 12,
    transform: "translateY(-8px)",
    opacity: 0,
    pointerEvents: "none",
    transition: "0.25s ease"
  },

  actionsOpen: {
    transform: "translateY(0)",
    opacity: 1,
    pointerEvents: "auto"
  },

  actionLink: {
    background: "rgba(255,255,255,0.05)",
    padding: "10px 12px",
    borderRadius: 10,
    color: "#ccefff",
    textDecoration: "none",
    fontWeight: 600,
    "&:hover": { background: "rgba(255,255,255,0.1)" }
  },

  actionGhost: {
    background: "transparent",
    border: "none",
    color: "#ccc",
    marginTop: 6,
    cursor: "pointer",
    textDecoration: "underline"
  },

  /** -------------------------
   ** RIGHT CARDS (ANIMATED)
   ** ------------------------ */
  right: {
  display: "flex",
  flexDirection: "column",
  gap: 16,
},

card: {
  background: "rgba(255,255,255,0.02)",
  padding: 16,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.03)",
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.6s ease, transform 0.6s ease",
},

cardIn: {
  opacity: 1,
  transform: "translateY(0)",
},

  cardText: {
    fontSize: 14,
    opacity: 0.85
  },

  /** -------------------------
   ** SOCIAL ICONS (BOTTOM)
   ** ------------------------ */
socialsBottom: {
  gridColumn: "1 / -1",   // ⬅ THIS IS THE KEY
  marginTop: "48px",
  display: "flex",
  justifyContent: "center",
  gap: "16px",
},

  socialsBottomIn: {
    opacity: 1,
    transform: "translateY(0)"
  },

  socialBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.15)",
    transition: "0.25s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      background: "rgba(255,255,255,0.18)"
    }
  },
});

export default useStyles;
