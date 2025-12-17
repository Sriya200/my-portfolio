// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import useStyles from "../components/Contact/contact.style";
import { IconInstagram, IconLinkedIn, IconGitHub } from "./Icons";

export default function Contact() {
  const s = useStyles();

  const [open, setOpen] = useState(false);
  const [headerIn, setHeaderIn] = useState(false);
  const [rightIn, setRightIn] = useState(false);
  const [socialIn, setSocialIn] = useState(false);

  const headerRef = useRef(null);
  const rightRef = useRef(null);
  const socialRef = useRef(null);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current)
            setHeaderIn(entry.isIntersecting);
          if (entry.target === rightRef.current)
            setRightIn(entry.isIntersecting);
          if (entry.target === socialRef.current)
            setSocialIn(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    headerRef.current && obs.observe(headerRef.current);
    rightRef.current && obs.observe(rightRef.current);
    socialRef.current && obs.observe(socialRef.current);

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (
        open &&
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <section id="contact" className={s.contact}>
      <div className={s.inner}>
        {/* LEFT */}
        <div className={s.left}>
          <h2
            ref={headerRef}
            className={`${s.header} ${headerIn ? s.headerIn : ""}`}
          >
            Reach Out <br /> to Me
          </h2>

          <div className={s.ctaWrap}>
            <div className={s.btnWrap}>
              <button
                ref={btnRef}
                className={s.sendBtn}
                onClick={() => setOpen(!open)}
              >
                {open ? "Close" : "Send Message"}
              </button>

              <div
                ref={panelRef}
                className={`${s.actionsPanel} ${
                  open ? s.actionsOpen : ""
                }`}
              >
                <a
                  href="mailto:chakrabortysriyanka1@gmail.com"
                  className={s.actionLink}
                >
                  Open Email
                </a>
                <button
                  className={s.actionGhost}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <aside ref={rightRef} className={s.right}>
          <div className={`${s.card} ${rightIn ? s.cardIn : ""}`}>
            <div className={s.cardTitle}>Address</div>
            <div className={s.cardText}>Bangalore, Karnataka</div>
          </div>

          <div className={`${s.card} ${rightIn ? s.cardIn : ""}`}>
            <div className={s.cardTitle}>Email</div>
            <div className={s.cardText}>
              chakrabortysriyanka1@gmail.com
            </div>
          </div>

          <div className={`${s.card} ${rightIn ? s.cardIn : ""}`}>
            <div className={s.cardTitle}>Phone</div>
            <div className={s.cardText}>+91-6295221974</div>
          </div>
        </aside>

        {/* ✅ SOCIALS — MUST BE INSIDE GRID */}
        <div
          ref={socialRef}
          className={`${s.socialsBottom} ${
            socialIn ? s.socialsBottomIn : ""
          }`}
        >
          <a className={s.socialBtn} href="https://www.instagram.com/turtl_estudio/" target="_blank">
            <IconInstagram />
          </a>
          <a className={s.socialBtn} href="https://www.linkedin.com/in/sriyanka-chakraborty-300572284/" target="_blank">
            <IconLinkedIn />
          </a>
          <a className={s.socialBtn} href="https://github.com/Sriya200" target="_blank">
            <IconGitHub />
          </a>
        </div>
      </div>
    </section>
  );
}
