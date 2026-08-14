import { useState, useEffect, useRef } from 'react';
import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';

const BASE = 'https://gstar.newturing.ai/2026/static/img/event';

const stats = [
  { end: 269,  dec: 0, suffix: '',               desc: 'applicants from 15+ countries' },
  { end: 17.8, dec: 1, suffix: '%',              desc: 'acceptance rate in Cohort 1' },
  { end: 50,   dec: 0, suffix: '',               desc: 'engineers selected' },
  { end: 20,   dec: 0, suffix: '+ universities', desc: 'represented worldwide' },
  { end: 10,   dec: 0, suffix: '+',              desc: 'companies — Kaggle, eBay, Grab, GSK, Coupang, A*STAR and more' },
  { end: 10,   dec: 0, suffix: '',               desc: 'frontier capstone projects shipped in 12 weeks' },
];

const gallerySupport = [
  { src: `${BASE}/gstar-2025-02.webp`, alt: 'GStar Cohort 1 team collaboration' },
  { src: `${BASE}/gstar-2025-03.webp`, alt: 'GStar Cohort 1 capstone showcase' },
  { src: `${BASE}/gstar-2025-04.webp`, alt: 'GStar Cohort 1 mentoring session' },
  { src: `${BASE}/gstar-2025-05.webp`, alt: 'GStar Cohort 1 demo day' },
];

const easeOut = t => 1 - Math.pow(1 - t, 3);

const CohortStats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        const duration = 1500;
        const startTime = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const ease = easeOut(progress);
          setCounts(stats.map(s => parseFloat((ease * s.end).toFixed(s.dec))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cs-section">
      <div className="container center">

        <p className="tc f5 mb2" style={{ color: 'rgba(255,255,255,0.7)' }}>
          The bar GStar 2026 is built on.
        </p>
        <h2 className="f2 fw7 ttu tracked-l tc mb0" style={{ color: '#ffffff' }}>
          Cohort 2025 — By the Numbers
        </h2>

        <div className="cs-stats" ref={statsRef}>
          {stats.map((s, i) => (
            <div key={i} className="cs-stat">
              <div className="cs-stat-num">
                {counts[i].toFixed(s.dec)}{s.suffix}
              </div>
              <div className="cs-stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>

        <p className="cs-lead">
          Every Cohort 1 project was mentored, graded, and ranked — and reputable start-up accelerators showed immediate interest in the top 3.
        </p>

        <div className="cs-gallery">
          <div className="cs-gallery__lead">
            <img
              src={`${BASE}/gstar-2025-06.webp`}
              alt="GStar Cohort 1 graduation"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="cs-gallery__support">
            {gallerySupport.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            ))}
          </div>
        </div>

        <div className="cs-cta">
          <a
            href="https://gstar.newturing.ai/2025"
            className="cs-btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Previous Cohorts →
          </a>
        </div>

      </div>
    </section>
  );
};

export default CohortStats;
