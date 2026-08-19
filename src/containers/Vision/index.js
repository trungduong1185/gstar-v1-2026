import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';

const items = [
  {
    icon: (
      <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    title: 'World-class mentorship',
    content: 'From AI researchers and engineers at leading companies.',
  },
  {
    icon: (
      <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    title: 'Hands-on capstone',
    content: 'With industry-graded code repo, short paper, and public presentation.',
  },
  {
    icon: (
      <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 12h4" />
        <path d="M10 8h4" />
        <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      </svg>
    ),
    title: 'Direct pipelines into R&D roles',
    content: 'Potential internships or job opportunities at partner organizations.',
  },
  {
    icon: (
      <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
        <path d="M6.453 15h11.094" />
        <path d="M8.5 2h7" />
      </svg>
    ),
    title: 'Research acceleration opportunities',
    content: 'At global labs.',
  },
  {
    icon: (
      <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 7h6v6" />
        <path d="m22 7-8.5 8.5-5-5L2 17" />
      </svg>
    ),
    title: 'Leadership growth',
    content: 'Through weekly communication, influence, and self-management workshops.',
  },
  {
    icon: (
      <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'In-person meetups',
    content: 'Cohort meetups at Google DeepMind (Mountain View and Palo Alto), plus Singapore, Hanoi, Ho Chi Minh City and Da Nang.',
  },
  {
    icon: (
      <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: 'Lifetime alumni network',
    content: "With ongoing mentorship and collaboration channels, inside NTI's AI community of 30,000+ members across nine countries.",
  },
];

const Vision = ({ id }) => (
  <div id={id} className="w-100 tc block-pt-pb bg-program">
    <div className="container center">
      <p className="f3 f2-l fw7 pc-red ttu tracked-l">
        What You'll Get
      </p>
      <div className="vision-grid mt3 mt4-l">
        {items.map((item, i) => (
          <div key={i} className="vision-item">
            <div className="vision-icon">{item.icon}</div>
            <div className="vision-title">{item.title}</div>
            <p className="vision-desc">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Vision;
