import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { register_link as registerLink } from '../../assets/data.json';

const What = ({ id }) => {
  const [selectedId, setSelectedId] = useState(1);
  var isMobile = useMediaQuery('(max-width: 768px)');

  const toggleCol_1 =
    selectedId === 1 ? 'db w-100  w-50-l ' : 'dn db-l w-50-l ';
  const toggleCol_2 =
    selectedId === 2 ? 'db w-100  w-50-l ' : 'dn db-l w-50-l ';

  return (
    <div className="w-100 lh-copy block-pt-pb" style={{background: '#ffffff'}}>
      <div id={id} />
      <div className="container center flex flex-wrap flex-column flex-row-l">
        {/* <!-- cot 1 --> */}
        <div
          className="w-100 w-30-l f2 fw7 ttu ph2 pl0 pr5-l pc-what-title tc tl-l tracked-l"
          style={!isMobile ? { position: 'sticky', top: '6rem', alignSelf: 'flex-start' } : undefined}
        >
          What you will <br />
          learn in this <br />
          bootcamp
        </div>

        {/* <!-- cot 2 --> */}
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

          <div className='w-90 center'>

            {/* Week 1–2 */}
            <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className={`w-100 ${isMobile ? ' h2 mt1' : 'h2'}`}>Week 1</div>
                <div className={`w-100 ${isMobile ? ' h2 mt1' : 'h4'}`}>Week 2</div>
              </div>
              <div className="w-80 flex">
                <div className={toggleCol_1 + 'flex-l flex-wrap mr2-l'}>
                  <div className="w-100 green-week-box tc d-flex align-items flex-column">
                    <span className="b">Review of advanced NLP techniques</span>
                    <br />
                    Goal: recap fundamental knowledge such as attention, tokenization, Transformer, and end-to-end training.
                  </div>
                  <div className="w-100 green-week-box tc mt3 d-flex align-items flex-column">
                    <span className="b">Pre-training</span>
                    <br />
                    Goal: develop in-depth understanding of attention (Linear Attention, FlashAttention), advanced Transformers (Sparse Transformer, Transformer-XL, MoE), hybrid architectures (Mamba), and LLM pretraining.
                    <br />
                    Tutorial: train a large language model from scratch.
                    <br />
                    Assignment 1 (weeks 1–2): optimizer state sharding.
                  </div>
                </div>
                <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l'}>
                  <div className={'pink-week-box tc'}>
                    <span className="b">Individual Project brainstorming</span>
                    <br />
                    Goal: think critically about interesting and impactful ideas that can be achieved in 12 weeks.
                    <br />
                    Deliverables: project proposal (2–4 pages) to be reviewed by technical buddies &amp; program leads.
                  </div>
                </div>
              </div>
            </div>

            {/* Week 3–5 */}
            <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className={`w-100 ${isMobile ? ' h4 mt1' : 'h4'}`}>Week 3</div>
                <div className={`w-100 ${isMobile ? ' h3' : ' h4 mt3'}`}>Week 4</div>
                <div className={`w-100 ${isMobile ? ' h2 mt1' : 'h2'}`}>Week 5</div>
              </div>
              <div className="w-80 flex">
                <div className={toggleCol_1 + 'flex-l flex-wrap mr2-l'}>
                  <div className="w-100 green-week-box tc d-flex align-items flex-column">
                    <span className="b">Post-training</span>
                    <br />
                    Goal: understand supervised finetuning (SFT) and parameter-efficient methods. Learn how to prepare data, set up training, tune hyperparameters, perform decoding, and evaluate.
                  </div>
                  <div className="w-100 green-week-box tc d-flex mt3 align-items flex-column">
                    <span className="b">Alignment &amp; Advanced reasoning</span>
                    <br />
                    Goal: understand learning from human feedback (RLHF, DPO, SimPO) and recent developments in reasoning models (DeepSeek-R1, GRPO, RLVR), including RL for agents.
                  </div>
                  <div className={`w-100 green-week-box tc mt3 flex-center flex-column ${isMobile ? 'h4' : ''}`}>
                    <span className="b">Assignment 2 (weeks 3–5): train math reasoning models with GRPO</span>
                  </div>
                </div>
                <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l'}>
                  <div className={'pink-week-box tc'}>
                    <span className="b">Individual Project prototype</span>
                    <br />
                    Goal: implement the first version of the project proposal utilizing knowledge learned during the first 6 weeks.
                    <br />
                    Deliverables: project presentation presented to technical buddies, program leads, and senior advisors.
                  </div>
                </div>
              </div>
            </div>

            {/* Week 6 — milestone */}
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

            {/* Week 7–8 */}
            <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className="w-100 h3">Week 7</div>
                <div className="w-100 h3 mt3">Week 8</div>
              </div>
              <div className="w-80 flex">
                <div className={toggleCol_1 + 'flex-l flex-wrap mr2-l'}>
                  <div className="w-100 green-week-box tc d-flex align-items flex-column">
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
                  <div className="w-100 green-week-box tc d-flex mt3 align-items flex-column">
                    <span className="b">Advanced inference</span>
                    <br />
                    Goal: kv-caching, advanced and speculative decoding, Triton, serving optimizations, FLOPS and GPU utilization.
                  </div>
                </div>
                <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l'}>
                  <div className={'pink-week-box tc'}>
                    <span className="b">Team Project refinement</span>
                    <br />
                    Goal: refine the idea and implementation based on feedback of the prototype.
                    <br />
                    Deliverables:
                    <ul className='ul-list-conent'>
                      <li>project mid-term report (2–4 pages) on the latest results</li>
                      <li>initial code submission</li>
                    </ul>
                    <br />
                    To be reviewed by technical buddies &amp; program leads.
                  </div>
                </div>
              </div>
            </div>

            {/* Week 9–11 */}
            <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className="w-100 h3">Week 9</div>
                <div className="w-100 h3 mt3">Week 10</div>
                <div className="w-100 h3">Week 11</div>
              </div>
              <div className="w-80 flex">
                <div className={toggleCol_1 + 'flex-l flex-wrap mr2-l'}>
                  <div className="w-100 green-week-box tc d-flex align-items flex-column">
                    <span className="b">Guest lectures</span>
                  </div>
                  <div className="w-100 green-week-box tc d-flex mt3 align-items flex-column">
                    <span className="b">Guest lectures</span>
                  </div>
                  <div className={`w-100 green-week-box tc mt3 flex-column ${isMobile ? 'h4' : ''}`}>
                    <span className="b">Guest lectures</span>
                  </div>
                </div>
                <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l'}>
                  <div className={'pink-week-box tc'}>
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
              </div>
            </div>

            {/* Week 12 — milestone */}
            <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className="w-100 h4">Week 12</div>
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
