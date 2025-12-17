import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useStyles from "../components/Projects/projects.style";
import { projects } from "../data/projectsData";

export default function Projects() {
  const s = useStyles();
  const sectionRef = useRef(null);

  useEffect(() => {
    const tiles = sectionRef.current?.querySelectorAll("[data-tile]");
    if (!tiles) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(s.show, entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    tiles.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [s]);

  return (
    <section ref={sectionRef} id="projects" className={`snap-section ${s.projects}`}>
      <h1 className={s.title}>My Projects</h1>

      <div className={s.tiles}>
        {projects.map((p, idx) => (
          <article
            key={p.id}
            data-tile
            className={s.tile}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <Link to={`/projects/${p.id}`} className={s.projectLink}>
              <div className={s.logoWrap}>
                <img src={p.imgPath} alt={p.title} className={s.logoImg} />
              </div>

              <div className={s.descWrap}>
  <span className={s.arrowIcon}>↳</span>

  <div>
    <h3 className={s.projectTitle}>
      {p.shortTitle}
    </h3>
  </div>
</div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
