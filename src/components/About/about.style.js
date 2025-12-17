// src/components/About/about.style.js
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
about: {
  height: "100%",
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  boxSizing: "border-box",
  
  display: "flex",
  alignItems: "center",
  padding: '36px',

  background: "#000",
  color: "#fff",

  overflow: "hidden",

  "@media (max-width: 900px)": {
    padding: "20px",
  },
},
  left: {
    maxWidth: 860,
  },

  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 400,
    fontSize: 'clamp(56px, 10vw, 80px)',
    lineHeight: 0.98,
    margin: 0,
    color: '#fff',
    opacity: 0,
    transform: 'translateY(-30px)',
    animation: '$titleIn 1200ms cubic-bezier(.16,.84,.26,1) forwards',
  },

  intro: {
    marginTop: theme?.spacing?.(5) ?? '32px',
    maxWidth: 720,
    fontSize: 'clamp(16px, 1.6vw, 20px)',
    lineHeight: 1.6,
    color: '#8d8981',
    opacity: 0,
    transform: 'translateY(10px)',
    animation: '$copyIn 1000ms ease-out forwards',
    animationDelay: '160ms',
    '@media (max-width: 900px)': { marginTop: '16px' },
  },

  underline: {
    width: 120,
    height: 2,
    background: 'rgba(255,255,255,0.85)',
    marginTop: theme?.spacing?.(4) ?? '28px',
    opacity: 0,
    transform: 'scaleX(0)',
    transformOrigin: 'left center',
    animation: '$underline 900ms ease-out forwards',
    animationDelay: '380ms',
  },

  '@keyframes titleIn': {
    '0%': { opacity: 0, transform: 'translateY(-30px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  '@keyframes copyIn': {
    '0%': { opacity: 0, transform: 'translateY(12px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  '@keyframes underline': {
    '0%': { opacity: 0, transform: 'scaleX(0)' },
    '100%': { opacity: 1, transform: 'scaleX(1)' },
  },
  right: {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 900px)": {
    marginTop: 40,
  },
},

cvBtn: {
  padding: "16px 42px",
  borderRadius: 999,
  fontSize: 18,
  fontWeight: 600,
  color: "#fff",
  background: "linear-gradient(135deg, #8c6b4a, #b08a63)",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",

  boxShadow: "0 12px 30px rgba(176,138,99,0.35)",
  transform: "translateY(0)",
  transition: "all 0.35s cubic-bezier(.22,.61,.36,1)",

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 22px 44px rgba(176,138,99,0.5)",
  },

  "&:active": {
    transform: "translateY(-2px) scale(0.98)",
  },
},

}));

export default useStyles;
