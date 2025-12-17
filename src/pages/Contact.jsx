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

  /* Intersection animations */
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
      { threshold: 0.25 }
    );

    headerRef.current && obs.observe(headerRef.current);
    rightRef.current && obs.observe(rightRef.current);
    socialRef.current && obs.observe(socialRef.current);

    return () => obs.disconnect();
  }, []);

  /* Close action panel on outside click */
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
                onClick={() => setOpen((v) => !v)}
              >
                {open ? "Close" : "Send Message"}
              </button>

              {/* ACTION PANEL */}
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
                  type="button"
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
          {[
            { label: "Address", value: "Bangalore, Karnataka" },
            { label: "Email", value: "chakrabortysriyanka1@gmail.com" },
            { label: "Phone", value: "+91-6295221974" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`${s.card} ${rightIn ? s.cardIn : ""}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={s.cardTitle}>{item.label}</div>
              <div className={s.cardText}>{item.value}</div>
            </div>
          ))}
        </aside>

        {/* SOCIALS */}
        <div
          ref={socialRef}
          className={`${s.socialsBottom} ${
            socialIn ? s.socialsBottomIn : ""
          }`}
        >
          <a
            className={s.socialBtn}
            href="https://www.instagram.com/turtl_estudio/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <IconInstagram />
          </a>

          <a
            className={s.socialBtn}
            href="https://www.linkedin.com/in/sriyanka-chakraborty-300572284/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <IconLinkedIn />
          </a>

          <a
            className={s.socialBtn}
            href="https://github.com/Sriya200"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <IconGitHub />
          </a>
        </div>
      </div>
    </section>
  );
}
