import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';

const BASE = 'https://gstar.newturing.ai/2026/static/img/event';

const stats = [
  { num: '269',           desc: 'applicants from 15+ countries' },
  { num: '17.8%',         desc: 'acceptance rate in Cohort 1' },
  { num: '50',            desc: 'engineers selected' },
  { num: '20+ universities', desc: 'represented worldwide' },
  { num: '10+',           desc: 'companies — Kaggle, eBay, Grab, GSK, Coupang, A*STAR and more' },
  { num: '10',            desc: 'frontier capstone projects shipped in 12 weeks' },
];

const gallerySupport = [
  { src: `${BASE}/gstar-2025-02.webp`, alt: 'GStar Cohort 1 team collaboration' },
  { src: `${BASE}/gstar-2025-03.webp`, alt: 'GStar Cohort 1 capstone showcase' },
  { src: `${BASE}/gstar-2025-04.webp`, alt: 'GStar Cohort 1 mentoring session' },
  { src: `${BASE}/gstar-2025-05.webp`, alt: 'GStar Cohort 1 demo day' },
];

const CohortStats = () => (
  <section className="cs-section">
    <div className="container center">

      {/* ── By the Numbers ── */}
      <p className="tc f5 mb2" style={{ color: 'rgba(255,255,255,0.7)' }}>
        The bar GStar 2026 is built on.
      </p>
      <h2 className="f2 fw7 ttu tracked-l tc mb0" style={{ color: '#ffffff' }}>
        Cohort 1 — By the Numbers
      </h2>

      <div className="cs-stats">
        {stats.map((s, i) => (
          <div key={i} className="cs-stat">
            <div className="cs-stat-num">{s.num}</div>
            <div className="cs-stat-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      <p className="cs-source">
        Source: GStar Cohort 1 program records. Organization and employer names describe cohort representation, not sponsorship.
      </p>

      <p className="cs-lead">
        Every Cohort 1 project was mentored, graded, and ranked — and reputable start-up accelerators showed immediate interest in the top 3.
      </p>

      {/* ── Gallery ── */}
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

export default CohortStats;
