import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';

const BASE = 'https://gstar.newturing.ai/2026/static/img';

const projects = [
  {
    img: `${BASE}/projects/project-qgentic-ai.webp`,
    alt: 'Qgentic AI presentation preview',
    tag: 'Agents · Autonomous ML engineering',
    title: 'Qgentic AI',
    desc: 'An agent architecture for autonomous machine learning: permanent memory, stronger researcher roles, targeted code editing, and a fine-tuned Gemini-2.5-Flash model trained on 40,000+ debugging examples. Across Kaggle competitions it reached nearly 95% weighted mean percentile, outperforming existing agents.',
  },
  {
    img: `${BASE}/virtual-cell-presentation-preview.png`,
    alt: 'Virtual Cell presentation preview',
    tag: 'AI for science · Drug discovery',
    title: 'Virtual Cell',
    desc: 'A biology-grounded architecture pairing graph neural networks with physics-informed models to predict gene interactions more reliably than data scaling alone. Built as a virtual-cell infrastructure layer for screening molecular targets before wet-lab testing.',
  },
  {
    img: `${BASE}/projects/project-ares-ai.webp`,
    alt: 'ARES presentation preview',
    tag: 'ML systems · MoE serving',
    title: 'ARES',
    desc: 'A runtime framework that speeds up Mixture-of-Experts serving by identifying and skipping redundant experts before dispatch. Integrated into vLLM with drift-aware profiling, it cuts decoding latency while preserving model quality.',
  },
];


const CohortProjects = () => (
    <section className="cp-section">
      <div className="container center">
        <h2 className="f2 fw7 ttu tracked-l tc pc-black mb2">
          What GStar Bootcamp Cohort 1 Built
        </h2>
        <p className="tc f5 pc-dark-gray mb0">Real systems, shipped in 12 weeks.</p>

        <div className="cp-grid">
          {projects.map((p, i) => (
            <article key={p.title} className="cp-card">
              <img src={p.img} alt={p.alt} loading="lazy" decoding="async" />
              <div className="cp-card-body">
                <span className="cp-tag">{p.tag}</span>
                <h3 className="cp-card-title">{p.title}</h3>
                <p className="cp-card-desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
);

export default CohortProjects;
