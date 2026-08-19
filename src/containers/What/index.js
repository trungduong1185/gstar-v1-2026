import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { register_link as registerLink } from '../../assets/data.json';

const What = ({ id }) => {
  const [selectedId, setSelectedId] = useState(1);
  var isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="w-100 lh-copy block-pt-pb" style={{background: '#ffffff'}}>
      <div id={id} />
      <div className="container center flex flex-wrap flex-column flex-row-l">
        {/* col 1 — sticky title */}
        <div
          className="w-100 w-30-l f2 fw7 ttu ph2 pl0 pr5-l pc-what-title tc tl-l tracked-l"
          style={!isMobile ? { position: 'sticky', top: '6rem', alignSelf: 'flex-start' } : undefined}
        >
          What you will <br />
          learn in this <br />
          bootcamp
        </div>

        {/* col 2 — content */}
        <div className="w-100 w-70-l pc-what-content fw3">

          {/* mobile tab switcher */}
          <div className='w-100' style={{background: '#ffffff', position: "sticky", top: '2rem'}}>
            <div className="w-90 center flex dn-l justify-end bb bw1 b--white-05 pt4">
              <div
                className={'w-40 pointer pb2 ' + (selectedId !== 1 ? 'o-30' : ' bb--pc-red')}
                onClick={() => setSelectedId(1)}
              >
                <p className="pc-training fw7 ttu tc">State-of-the-art LLM Training</p>
              </div>
              <div
                className={'w-40 pointer pb2 ' + (selectedId !== 2 ? 'o-30' : ' bb--pc-red')}
                onClick={() => setSelectedId(2)}
              >
                <p className="pc_what_pink fw7 ttu tc">Capstone project</p>
              </div>
            </div>
          </div>

          {/* desktop headers */}
          <div className="dn w-100 flex-l justify-end bb bw1 b--gray pv4 mb4">
            <div className="w-40">
              <p className="pc-training fw7 ttu tc">State-of-the-art LLM Training</p>
            </div>
            <div className="w-40">
              <p className="pc_what_pink fw7 ttu tc">Capstone project</p>
            </div>
          </div>

          <div className={isMobile ? 'w-100' : 'w-90 center'}>

            {/* ── Week 1–3 ── */}
            <div className="w-100 pv2" style={{ display: 'grid', gridTemplateColumns: isMobile ? '20% 1fr' : '20% 1fr 1fr', gridTemplateRows: 'auto auto auto', rowGap: '12px', columnGap: 0 }}>
              <div className="tc fw5" style={{ gridColumn: 1, gridRow: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '8px' }}>Week 1</div>
              <div className={`green-week-box tc d-flex align-items flex-column${selectedId !== 1 ? ' dn db-l' : ''}`} style={{ gridColumn: 2, gridRow: 1, marginRight: isMobile ? 0 : '0.5rem' }}>
                <span className="b">Review of advanced NLP techniques</span>
                <br />
                Goal: recap fundamental knowledge such as attention, tokenization, Transformer, and end-to-end training.
              </div>
              <div className={`pink-week-box tc${selectedId !== 2 ? ' dn db-l' : ''}`} style={{ gridColumn: isMobile ? 2 : 3, gridRow: '1 / span 3', marginLeft: isMobile ? 0 : '0.5rem' }}>
                <span className="b">Individual Project brainstorming</span>
                <br />
                Goal: think critically about interesting and impactful ideas that can be achieved in 14 weeks.
                <br />
                Deliverables: project proposal (2–4 pages) to be reviewed by technical buddies &amp; program leads.
              </div>
              <div className="tc fw5" style={{ gridColumn: 1, gridRow: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '8px' }}>Week 2</div>
              <div className={`green-week-box tc d-flex align-items flex-column${selectedId !== 1 ? ' dn db-l' : ''}`} style={{ gridColumn: 2, gridRow: 2, marginRight: isMobile ? 0 : '0.5rem' }}>
                <span className="b">Pre-training</span>
                <br />
                Goal: develop in-depth understanding of attention (e.g., Linear Attention, FlashAttention), advanced Transformers (Sparse Transformer - Transformer-XL, MoE) and LLM pretraining.
                <br />
                Tutorial: Train a large language model from scratch.
                <br /><br />
                <span className="b">Assignment 1 (week 1-2): Optimizer state sharding</span>
              </div>
              <div className="tc fw5" style={{ gridColumn: 1, gridRow: 3, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '8px' }}>Week 3</div>
              <div className={`green-week-box tc d-flex align-items flex-column${selectedId !== 1 ? ' dn db-l' : ''}`} style={{ gridColumn: 2, gridRow: 3, marginRight: isMobile ? 0 : '0.5rem' }}>
                <span className="b">Post-training</span>
                <br />
                Goal: understand supervised finetuning (SFT) and parameter-efficient methods. Learn how to prepare data, setup training, hyperparameter optimization, perform decoding, and evaluation.
              </div>
            </div>

            {/* ── Week 4–5 ── */}
            <div className="w-100 pv2" style={{ display: 'grid', gridTemplateColumns: isMobile ? '20% 1fr' : '20% 1fr 1fr', gridTemplateRows: 'auto auto', rowGap: '12px', columnGap: 0 }}>
              <div className="tc fw5" style={{ gridColumn: 1, gridRow: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '8px' }}>Week 4</div>
              <div className={`green-week-box tc d-flex align-items flex-column${selectedId !== 1 ? ' dn db-l' : ''}`} style={{ gridColumn: 2, gridRow: 1, marginRight: isMobile ? 0 : '0.5rem' }}>
                <span className="b">Deepdive on Kimi 3</span>
              </div>
              <div className={`pink-week-box tc${selectedId !== 2 ? ' dn db-l' : ''}`} style={{ gridColumn: isMobile ? 2 : 3, gridRow: '1 / span 2', marginLeft: isMobile ? 0 : '0.5rem' }}>
                <span className="b">Individual Project prototype</span>
                <br />
                Goal: implement the first version of the project proposal utilizing knowledge learned during the first 6 weeks.
                <br />
                Deliverables: project presentation presented to technical buddies, program leads, and senior advisors.
              </div>
              <div className="tc fw5" style={{ gridColumn: 1, gridRow: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '8px' }}>Week 5</div>
              <div className={`green-week-box tc d-flex align-items flex-column${selectedId !== 1 ? ' dn db-l' : ''}`} style={{ gridColumn: 2, gridRow: 2, marginRight: isMobile ? 0 : '0.5rem' }}>
                <span className="b">Alignment &amp; Advanced reasoning</span>
                <br />
                Goal: understand learning from human feedback (RLHF, DPO) and recent developments for advanced reasoning models (DeepSeek-R1 and GRPO).
                <br /><br />
                <span className="b">Assignment 2 (week 4-5): Kimi 3</span>
              </div>
            </div>

            {/* ── Week 6 — milestone ── */}
            <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className="w-100 h4">Week 6</div>
              </div>
              <div className="w-80 yellow-week-box bg-pc-red ttu pc-white tc">
                <span className='f3 fw7'>Project prototype presentation</span>
                <br />
                (Individual students will merge into teams for collaborative works)
              </div>
            </div>

            {/* ── Week 7–9 ── */}
            <div className="w-100 pv2" style={{ display: 'grid', gridTemplateColumns: isMobile ? '20% 1fr' : '20% 1fr 1fr', gridTemplateRows: 'auto auto auto', rowGap: '12px', columnGap: 0 }}>
              {/* Week 7 label */}
              <div className="tc fw5" style={{ gridColumn: 1, gridRow: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '8px' }}>Week 7</div>
              {/* Assignment 3 */}
              <div className={`green-week-box tc d-flex align-items flex-column${selectedId !== 1 ? ' dn db-l' : ''}`} style={{ gridColumn: 2, gridRow: 1, marginRight: isMobile ? 0 : '0.5rem' }}>
                <span className="b">Assignment 3 (week 5-7): Train math reasoning models with GRPO</span>
              </div>
              {/* Capstone Team Project — spans rows 1–3 */}
              <div className={`pink-week-box tc${selectedId !== 2 ? ' dn db-l' : ''}`} style={{ gridColumn: isMobile ? 2 : 3, gridRow: '1 / span 3', marginLeft: isMobile ? 0 : '0.5rem' }}>
                <span className="b">Capstone Team Project forming and topic refinement</span>
                <br />
                Goal: form your team, define and refine the idea based on feedback of the prototype.
                <br />
                Deliverables:
                <ul className='ul-list-conent'>
                  <li>Project mid-term report (2–4 pages) on the latest results</li>
                  <li>Initial code submission</li>
                </ul>
                <br />
                To be reviewed by technical buddies &amp; program leads.
              </div>
              {/* Week 8 label */}
              <div className="tc fw5" style={{ gridColumn: 1, gridRow: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '8px' }}>Week 8</div>
              {/* Agents */}
              <div className={`green-week-box tc d-flex align-items flex-column${selectedId !== 1 ? ' dn db-l' : ''}`} style={{ gridColumn: 2, gridRow: 2, marginRight: isMobile ? 0 : '0.5rem' }}>
                <div style={{display:'flex', alignItems:'center', gap:'8px', flexWrap:'wrap', marginBottom:'8px', justifyContent:'center'}}>
                  <span className="b">Agents and evaluation</span>
                  <span style={{background:'#f6eeee', color:'#731013', border:'1px solid #f0d0d1', borderRadius:'999px', fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', padding:'3px 10px'}}>EXPANDED FOR 2026</span>
                </div>
                <ul className='ul-list-conent' style={{textAlign:'left'}}>
                  <li>Computer use agents (CUA)</li>
                  <li>Coding agents and autonomous engineering workflows</li>
                  <li>Multi-agent systems: coordination, roles, division of labor</li>
                  <li>Harness, orchestration and the Harmony framework</li>
                  <li>Evolutionary algorithms for agent optimization</li>
                  <li>Evaluation: automated benchmarks (BLEURT, COMET) and LLM-as-judge</li>
                </ul>
              </div>
              {/* Week 9 label */}
              <div className="tc fw5" style={{ gridColumn: 1, gridRow: 3, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '8px' }}>Week 9</div>
              {/* Advanced Inference */}
              <div className={`green-week-box tc d-flex align-items flex-column${selectedId !== 1 ? ' dn db-l' : ''}`} style={{ gridColumn: 2, gridRow: 3, marginRight: isMobile ? 0 : '0.5rem' }}>
                <span className="b">Advanced Inference</span>
                <br />
                Goal: kv-caching, advanced decoding algorithms &amp; serving optimizations.
              </div>
            </div>

            {/* ── Week 10–13 ── */}
            <div className="w-100 pv2" style={{ display: 'grid', gridTemplateColumns: isMobile ? '20% 1fr' : '20% 1fr 1fr', gridTemplateRows: 'auto auto auto auto', rowGap: '12px', columnGap: 0 }}>
              {['10', '11', '12', '13'].map((week, i) => (
                <>
                  <div key={`lbl-${week}`} className="tc fw5" style={{ gridColumn: 1, gridRow: i + 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '8px' }}>Week {week}</div>
                  <div key={`left-${week}`} className={`green-week-box tc d-flex align-items flex-column${selectedId !== 1 ? ' dn db-l' : ''}`} style={{ gridColumn: 2, gridRow: i + 1, marginRight: isMobile ? 0 : '0.5rem' }}>
                    <span className="b">Guest lectures &amp; Project Consultations</span>
                  </div>
                </>
              ))}
              {/* Team Project completion — spans all 4 rows */}
              <div className={`pink-week-box tc${selectedId !== 2 ? ' dn db-l' : ''}`} style={{ gridColumn: isMobile ? 2 : 3, gridRow: '1 / span 4', marginLeft: isMobile ? 0 : '0.5rem' }}>
                <span className="b">Team Project completion</span>
                <br />
                Goal: complete the project with polished results and implementation.
                <br /><br />
                Deliverables:
                <ul className='ul-list-conent'>
                  <li>final project presentation to everyone</li>
                  <li>project final report (4–8 pages)</li>
                  <li>final code submission</li>
                </ul>
                <br />
                To be graded by technical buddies &amp; program leads.
              </div>
            </div>

            {/* ── Week 14 — Demo Day ── */}
            <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className="w-100 h4">Week 14</div>
              </div>
              <div className="w-80 yellow-week-box bg-pc-red ttu pc-white tc">
                <span className='f3 fw7'>Demo Day: final project presentation</span>
              </div>
            </div>

            {/* CTA */}
            <div className="w-100 flex justify-end pv4 mt3">
              <div className="w-80 tc">
                <a
                  href={registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dib fw7 ttu tracked"
                  style={{
                    background: '#731013',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    letterSpacing: '0.1em',
                    padding: '17px 44px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'background 160ms cubic-bezier(0.2, 0, 0, 1)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#5a0d0f'}
                  onMouseLeave={e => e.currentTarget.style.background = '#731013'}
                >
                  Apply Now
                </a>
                <div style={{ marginTop: '14px', fontSize: '0.875rem', color: '#656e7c' }}>
                  Deadline: August 23, 2026, Indochina Time
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
