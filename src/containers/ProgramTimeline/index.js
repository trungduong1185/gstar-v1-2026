import React from 'react';
import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';
import { register_link as registerLink } from '../../assets/data.json';

const timelineData = [
  {
    period: 'July – August 2026',
    title: 'Recruitment',
    items: [
      'August 10: Early-bird deadline to apply',
      'Entrance test for selected candidates',
      'Final evaluation',
    ],
    active: true,
  },
  {
    period: 'Sept – Dec 2026',
    title: 'Official Program',
    description: '14-week intensive training and project development, fully online.',
    active: false,
  },
  {
    period: 'December 2026',
    title: 'Demo Day',
    description: 'Final capstone presentations to the panel of lecturers, mentors and partners.',
    active: false,
  },
  {
    period: '2027',
    title: 'Presentation at GStar Summit',
    description: 'Top teams showcase their capstone to industry leaders, hiring partners and investors.',
    active: false,
  },
];

const ProgramTimeline = ({ id }) => (
  <section id={id} className="pt-block bg-white">
    <div className="container center">
      <h2 className="pt-heading">Program Timeline</h2>

      <div className="pt-grid">
        {timelineData.map((item, i) => (
          <div key={i} className={`pt-col${item.active ? ' pt-col--active' : ''}`}>
            <div className="pt-period">{item.period}</div>
            <div className="pt-title">{item.title}</div>
            {item.items ? (
              <ul className="pt-list">
                {item.items.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            ) : (
              <p className="pt-desc">{item.description}</p>
            )}
          </div>
        ))}
      </div>

      <div className="pt-cta">
        <a href={registerLink} target="_blank" rel="noopener noreferrer" className="pt-btn">Apply Now</a>
        <div className="pt-deadline">Deadline: August 23, 2026, Indochina Time</div>
      </div>
    </div>
  </section>
);

export default ProgramTimeline;
