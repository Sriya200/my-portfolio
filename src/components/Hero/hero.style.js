import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  hero: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    boxSizing: "border-box",

    display: "grid",
    gridTemplateColumns: "1fr 380px",
    alignItems: "center",
    gap: 28,

    padding: "48px 48px",
    background: "#000",
    color: "#fff",
    position: "relative",
    overflow: "hidden",

    /* Desktop only height */
    "@media (min-width: 901px)": {
      minHeight: "100vh",
    },

    /* Mobile fixes */
    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      padding: "96px 20px 72px",
      gap: 36,
      minHeight: "auto",
    },
  },

  left: {
    paddingRight: 20,

    "@media (max-width: 900px)": {
      paddingRight: 0,
      textAlign: "center",
    },
  },

  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 400,
    fontSize: "clamp(40px, 9vw, 96px)",
    lineHeight: 1,
    margin: 0,
    color: "#fff",
    opacity: 0,
    transform: "translateY(-36px)",

    "@media (max-width: 900px)": {
      fontSize: "clamp(36px, 10vw, 56px)",
    },
  },

  btnWrap: {
    marginTop: 28,
    opacity: 0,
    transform: "translateX(-24px)",

    "@media (max-width: 900px)": {
      display: "flex",
      justifyContent: "center",
    },
  },

  pillBtn: {
    display: "inline-block",
    padding: "12px 56px",
    borderRadius: 999,
    border: "2px solid rgba(255,255,255,0.92)",
    color: "#fff",
    textDecoration: "none",
    fontSize: 16,
    background: "transparent",
    cursor: "pointer",
    position: "relative",
    zIndex: 10,
    transition: "all 0.3s cubic-bezier(.16,.84,.26,1)",

    "&:hover": {
      background: "#8c6b4a",
      borderColor: "#8c6b4a",
      color: "#fff",
      transform: "translateY(-3px)",
      boxShadow: "0 10px 28px rgba(140,107,74,0.45)",
    },

    "&:active": {
      transform: "translateY(-1px) scale(0.98)",
    },

    "@media (max-width: 900px)": {
      padding: "10px 36px",
      fontSize: 15,
    },
  },

  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    pointerEvents: "none",

    "@media (max-width: 900px)": {
      justifyContent: "center",
    },
  },

  ellipse: {
    width: 320,
    height: 460,
    borderRadius: "20% 30% 25% 35% / 30% 25% 35% 20%",
    overflow: "hidden",
    background: "#2b2219",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transform: "translateY(20px) scale(0.96)",

    "@media (max-width: 900px)": {
      width: 220,
      height: 300,
      borderRadius: 24,
      transform: "translateY(10px) scale(0.97)",
    },
  },

  portraitImg: {
    width: "110%",
    height: "110%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  },

  /* Bottom CTA — desktop only */
  ctaCorner: {
    position: "fixed",
    left: 20,
    bottom: 16,
    color: "#fff",
    fontSize: 16,
    textDecoration: "none",
    zIndex: 100,

    "@media (max-width: 900px)": {
      display: "none",
    },
  },

  /* Animations */
  "@keyframes titleIn": {
    "0%": { opacity: 0, transform: "translateY(-36px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },

  "@keyframes btnIn": {
    "0%": { opacity: 0, transform: "translateX(-24px)" },
    "100%": { opacity: 1, transform: "translateX(0)" },
  },

  "@keyframes ellipseIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(24px) scale(0.94)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0) scale(1)",
    },
  },

  titleVisible: {
    animation: "$titleIn 1.2s cubic-bezier(.16,.84,.26,1) forwards",
  },

  btnVisible: {
    animation: "$btnIn 1.4s cubic-bezier(.22,.61,.36,1) 0.28s forwards",
  },

  ellipseVisible: {
    animation: "$ellipseIn 1.4s cubic-bezier(.22,.61,.36,1) 0.4s forwards",
  },
});

export default useStyles;
