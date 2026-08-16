import './App.css';
import './css/tachyons.min.css';
import './css/styles.css';
import Menu from './containers/Menu';
import CountDown from './containers/countDown';
import Vision from './containers/Vision';
import Mentorships from './containers/Mentorship';
import Apply from './containers/Apply';
import Footer from './containers/footer';
import What from './containers/What';
import Fee from './containers/Fee';
import About from './containers/About';
import ProgramTimeline from './containers/ProgramTimeline';
import FAQ from './containers/FAQ';
import Partners from './containers/partners';
import CohortStats from './containers/CohortStats';
import { menu } from './assets/data.json';

const previewStyles = `
  .revamp-preview {
    --preview-wine: #72191c;
    --preview-wine-dark: #31090c;
    --preview-ink: #18181b;
    --preview-muted: #65656d;
    --preview-line: #dedbd8;
    --preview-paper: #f5f2ed;
    --preview-blush: #f5e8e5;
    background: #fff;
    color: var(--preview-ink);
    overflow: clip;
  }

  .revamp-preview,
  .revamp-preview * {
    font-family: 'Lexend', sans-serif;
  }

  .revamp-preview .container {
    max-width: 1180px;
  }

  .revamp-preview #desktop-menu,
  .revamp-preview #mobile-menu {
    background: rgba(49, 9, 12, 0.92) !important;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(18px);
  }

  .revamp-preview #desktop-menu > div {
    width: min(1180px, calc(100% - 64px));
  }

  .revamp-preview #desktop-menu .btnApply {
    background: #fff;
    border-color: #fff;
    color: var(--preview-wine);
  }

  .revamp-preview .hero-2026 {
    box-sizing: border-box;
    min-height: 100svh;
    padding: 106px 48px 26px;
    background-position: center;
    text-align: left;
  }

  .revamp-preview .hero-2026-inner {
    width: min(1180px, 100%);
    max-width: 1180px;
    align-items: flex-start;
  }

  .revamp-preview .hero-eyebrow {
    margin-bottom: 24px;
    font-size: 0.75rem;
    letter-spacing: 0.24em;
  }

  .revamp-preview .hero-title {
    max-width: 800px;
    margin-bottom: 20px;
    font-size: clamp(4.25rem, 8vw, 7.25rem);
    letter-spacing: -0.055em;
  }

  .revamp-preview .hero-subtitle,
  .revamp-preview .hero-desc {
    max-width: 650px;
    text-align: left;
  }

  .revamp-preview .hero-subtitle {
    font-size: clamp(1.2rem, 2vw, 1.55rem);
  }

  .revamp-preview .hero-desc {
    margin-bottom: 32px;
    color: rgba(255, 255, 255, 0.72);
  }

  .revamp-preview .hero-countdown-old {
    justify-content: flex-start;
    margin-top: 0;
  }

  .revamp-preview .hero-countdown-old .khoiVuong {
    min-width: 96px;
    padding: 14px 18px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.17);
    border-radius: 2px;
  }

  .revamp-preview .hero-countdown-old .khoiVuong p:first-child {
    color: rgba(255, 255, 255, 0.56);
    font-size: 0.68rem;
    letter-spacing: 0.12em;
  }

  .revamp-preview .hero-cta-old {
    width: auto;
    text-align: left;
  }

  .revamp-preview .hero-cta-old .btnApply {
    min-width: 300px;
    margin-top: 28px;
    border-radius: 2px;
    text-align: center;
  }

  .revamp-preview .block-pt-pb {
    padding-block: 96px;
  }

  .revamp-preview .about-section {
    background: #fff;
  }

  .revamp-preview .about-title,
  .revamp-preview .pt-heading,
  .revamp-preview .title-header-mentorship,
  .revamp-preview #transformation > p,
  .revamp-preview #faq h2,
  .revamp-preview ._partner-title {
    letter-spacing: -0.025em;
  }

  .revamp-preview .about-pill {
    padding: 12px 0;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--preview-wine);
    border-radius: 0;
  }

  .revamp-preview .about-image {
    border-radius: 2px;
    box-shadow: none;
  }

  .revamp-preview .pt-block {
    padding: 104px 32px;
    background: var(--preview-paper);
  }

  .revamp-preview .pt-heading {
    margin-bottom: 72px;
    color: var(--preview-ink);
  }

  .revamp-preview .pt-grid {
    gap: 0;
  }

  .revamp-preview .pt-col {
    padding: 24px 28px 0 0;
    border-top-width: 1px;
  }

  .revamp-preview .pt-col--active {
    border-top-width: 4px;
  }

  .revamp-preview .pt-btn,
  .revamp-preview #tuition_fee a,
  .revamp-preview .cs-btn-ghost {
    border-radius: 2px;
  }

  .revamp-preview #program {
    scroll-margin-top: 88px;
  }

  .revamp-preview #program + .container {
    align-items: flex-start;
  }

  .revamp-preview .green-week-box,
  .revamp-preview .pink-week-box,
  .revamp-preview .yellow-week-box {
    background: transparent;
    border-width: 0 0 0 2px;
    border-radius: 0;
    padding: 18px 20px;
    text-align: left;
  }

  .revamp-preview .green-week-box {
    border-left-color: #343741;
  }

  .revamp-preview .pink-week-box,
  .revamp-preview .yellow-week-box {
    border-left-color: var(--preview-wine);
  }

  .revamp-preview .yellow-week-box.bg-pc-red {
    background: var(--preview-wine);
    border-left: 0;
  }

  .revamp-preview .title-header-mentorship {
    padding: 104px 24px 56px;
    background: var(--preview-wine-dark);
    color: #fff;
  }

  .revamp-preview #desktop-mentorship {
    max-width: none;
    padding-bottom: 48px;
    background: var(--preview-wine-dark);
    border-radius: 0;
  }

  .revamp-preview .mentorship-grid {
    gap: 1px;
    background: rgba(255, 255, 255, 0.16);
  }

  .revamp-preview .item-speakers,
  .revamp-preview .item-speakers .item-speakers {
    border-radius: 0;
    background: var(--preview-wine-dark);
  }

  .revamp-preview .speaker-left {
    border-radius: 0;
    background: #4a1013;
  }

  .revamp-preview .item-speakers .speaker-left img {
    border-radius: 0;
    filter: saturate(0.86);
  }

  .revamp-preview .speaker-right {
    color: #fff;
  }

  .revamp-preview .mentors-title li {
    color: rgba(255, 255, 255, 0.68);
  }

  .revamp-preview .cta-apply-mentorship {
    padding: 44px 0 72px;
    background: var(--preview-wine-dark);
  }

  .revamp-preview .cta-apply-mentorship p {
    color: rgba(255, 255, 255, 0.62) !important;
  }

  .revamp-preview #transformation {
    padding: 112px 0;
    background: var(--preview-paper);
  }

  .revamp-preview .vision-grid {
    max-width: 1180px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }

  .revamp-preview .vision-item {
    width: auto;
    min-height: 240px;
    padding: 38px 28px;
    align-items: flex-start;
    border-top: 1px solid var(--preview-line);
    text-align: left;
  }

  .revamp-preview .vision-icon {
    width: 46px;
    height: 46px;
    margin-bottom: 34px;
    background: transparent;
    border: 1px solid #d9c4c1;
  }

  .revamp-preview #tuition_fee {
    max-width: none;
    padding: 112px max(32px, calc((100vw - 1180px) / 2));
  }

  .revamp-preview .scholarship-box {
    padding: 72px 48px;
    border: 1px solid var(--preview-line);
    border-top: 6px solid var(--preview-wine);
    border-radius: 0;
  }

  .revamp-preview .cs-section {
    padding: 112px 32px;
    background: var(--preview-wine);
  }

  .revamp-preview .cs-stats {
    border-radius: 0;
  }

  .revamp-preview .cs-gallery {
    border-radius: 2px;
  }

  .revamp-preview #faq {
    padding: 112px 0;
  }

  .revamp-preview .faq-item {
    margin-bottom: 0;
    border-top: 1px solid var(--preview-line);
  }

  .revamp-preview .faq-item:last-child {
    border-bottom: 1px solid var(--preview-line);
  }

  .revamp-preview .faq-question,
  .revamp-preview .faq-answer {
    padding: 24px 4px;
  }

  .revamp-preview .faq-question:hover {
    background: transparent;
    color: var(--preview-wine);
  }

  .revamp-preview ._partner-title {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
  }

  .revamp-preview .block-mt-mb {
    width: 100%;
    margin: 96px 0 0;
    padding: 112px 24px;
    border-radius: 0;
    background: var(--preview-wine-dark);
  }

  .revamp-preview > div:last-child {
    margin-bottom: 0;
  }

  .revamp-preview .hero-title,
  .revamp-preview .hero-subtitle,
  .revamp-preview .hero-desc,
  .revamp-preview .hero-countdown-old,
  .revamp-preview .hero-cta-old {
    animation: preview-rise 700ms both cubic-bezier(.2,.75,.25,1);
  }

  .revamp-preview .hero-subtitle { animation-delay: 90ms; }
  .revamp-preview .hero-desc { animation-delay: 150ms; }
  .revamp-preview .hero-countdown-old { animation-delay: 220ms; }
  .revamp-preview .hero-cta-old { animation-delay: 280ms; }

  .revamp-preview .item-speakers,
  .revamp-preview .vision-item,
  .revamp-preview .cs-gallery img {
    transition: transform 220ms ease, background 220ms ease, filter 220ms ease;
  }

  .revamp-preview .item-speakers:hover,
  .revamp-preview .vision-item:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  .revamp-preview .cs-gallery img:hover {
    transform: scale(1.018);
  }

  @keyframes preview-rise {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    .revamp-preview {
      padding-bottom: 52px;
    }

    .revamp-preview #mobile-menu {
      height: 61px;
      padding-inline: 20px;
    }

    .revamp-preview .hero-2026 {
      min-height: 0;
      padding: 92px 20px 52px;
      text-align: center;
    }

    .revamp-preview .hero-2026-inner {
      align-items: center;
    }

    .revamp-preview .hero-title {
      max-width: 340px;
      font-size: clamp(2.75rem, 13vw, 3.65rem);
      text-align: center;
    }

    .revamp-preview .hero-subtitle,
    .revamp-preview .hero-desc {
      text-align: center;
    }

    .revamp-preview .hero-desc {
      margin-bottom: 24px;
      font-size: 0.92rem;
      line-height: 1.55;
    }

    .revamp-preview .hero-countdown-old {
      width: 100%;
      flex-wrap: nowrap;
      gap: 6px;
    }

    .revamp-preview .hero-countdown-old .khoiVuong {
      min-width: 0;
      flex: 1;
      padding: 9px 4px;
    }

    .revamp-preview .hero-countdown-old .soTo {
      font-size: 1.35rem;
    }

    .revamp-preview .hero-cta-old,
    .revamp-preview .hero-cta-old .btnApply {
      width: 100%;
      min-width: 0;
    }

    .revamp-preview .block-pt-pb {
      padding-block: 68px;
    }

    .revamp-preview .pt-block,
    .revamp-preview .cs-section,
    .revamp-preview #faq {
      padding: 72px 20px;
    }

    .revamp-preview .pt-heading {
      margin-bottom: 44px;
      text-align: left;
    }

    .revamp-preview .pt-col {
      padding-right: 0;
    }

    .revamp-preview #program + .container > div:first-of-type {
      margin-bottom: 28px;
      text-align: left;
    }

    .revamp-preview #program + .container > div:nth-of-type(2) > div:first-child {
      top: 61px !important;
      z-index: 20;
      box-shadow: 0 1px 0 var(--preview-line);
    }

    .revamp-preview .green-week-box,
    .revamp-preview .pink-week-box,
    .revamp-preview .yellow-week-box {
      padding: 14px 16px;
    }

    .revamp-preview .title-header-mentorship {
      padding: 76px 20px 36px;
      text-align: left;
    }

    .revamp-preview #desktop-mentorship {
      padding-inline: 0;
    }

    .revamp-preview .mentorship-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1px;
    }

    .revamp-preview .item-speakers,
    .revamp-preview .item-speakers .item-speakers {
      flex-direction: column;
    }

    .revamp-preview .speaker-left,
    .revamp-preview .item-speakers .speaker-left img {
      width: 100%;
      border-radius: 0;
    }

    .revamp-preview .item-speakers .speaker-left img {
      aspect-ratio: 1 / 1.08;
      object-fit: cover;
      object-position: top center;
    }

    .revamp-preview .speaker-right {
      min-height: 188px;
      padding: 16px 14px 20px;
    }

    .revamp-preview .mentors-title {
      padding-left: 14px;
    }

    .revamp-preview .mentors-title li {
      font-size: 0.72rem;
      line-height: 1.45;
    }

    .revamp-preview #transformation {
      padding: 76px 0;
    }

    .revamp-preview .vision-grid {
      grid-template-columns: 1fr;
      padding-inline: 20px;
    }

    .revamp-preview .vision-item {
      min-height: 0;
      padding: 28px 0;
    }

    .revamp-preview .vision-icon {
      margin-bottom: 20px;
    }

    .revamp-preview #tuition_fee {
      padding: 76px 20px;
    }

    .revamp-preview .scholarship-box {
      padding: 48px 20px;
    }

    .revamp-preview .cs-stats {
      grid-template-columns: 1fr;
    }

    .revamp-preview .cs-stat,
    .revamp-preview .cs-stat:nth-child(2n),
    .revamp-preview .cs-stat:nth-child(3n),
    .revamp-preview .cs-stat:nth-child(n+4),
    .revamp-preview .cs-stat:nth-child(n+5) {
      border-right: 0;
      border-bottom: 1px solid rgba(255,255,255,.22);
    }

    .revamp-preview .cs-stat:last-child {
      border-bottom: 0;
    }

    .revamp-preview .faq-question,
    .revamp-preview .faq-answer {
      padding: 20px 0;
    }

    .revamp-preview .block-mt-mb {
      margin-top: 72px;
      padding: 76px 20px 96px;
    }

    .revamp-preview > div > .fixed.btnApply,
    .revamp-preview > .fixed.btnApply {
      height: 52px !important;
      border: 0;
      border-top: 1px solid var(--preview-wine);
      background: #fff;
    }

    .revamp-preview > div > .fixed.btnApply p,
    .revamp-preview > .fixed.btnApply p {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .revamp-preview *,
    .revamp-preview *::before,
    .revamp-preview *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

function AppPreview() {
  return (
    <div className="revamp-preview sans-serif">
      <style>{previewStyles}</style>
      <Menu />
      <div id={menu.top.id} />
      <CountDown />
      <About id={menu.about.id} />
      <ProgramTimeline id={menu.timeline.id} />
      <What id={menu.program.id} />
      <Mentorships id={menu.aiexpertnetwork.id} title="AI EXPERT NETWORK" />
      <Vision id={menu.transformation.id} />
      <Fee id={menu.tuitionfee.id} />
      <CohortStats />
      <FAQ id={menu.faq.id} />
      <Partners />
      <Apply />
      <Footer />
    </div>
  );
}

export default AppPreview;
