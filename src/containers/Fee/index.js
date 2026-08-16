import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.scss';
import data from '../../assets/data.json';

const Fee = ({ id }) => {
    return (
        <section id={id} className="bg-white container block-pt-pb bg-white">
            <div className="center w-100 pt0 pb3">
                {/* Title Section */}
                <div className="mb4">
                    
                </div>
                {/* Official Tuition Fee Section */}
                <div className="scholarship-box tc">
                    <h2 className="f2 fw7 ttu tracked-l pc-black mb2">
                        Scholarships Available
                    </h2>
                    <div className="f1 fw7 pc-red mb3" style={{ lineHeight: 1.15 }}>
                        Up to 100% coverage
                    </div>
                    <p className="f5 pc-dark-gray mb4 center" style={{ maxWidth: '640px' }}>
                        We charge a tuition fee for this bootcamp and are committed to making high-quality AI education accessible through merit-based scholarships.
                    </p>
                    <a
                        href={data.register_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pc-red pc-near-white dib ph5 pv3 fw7 f5 ttu pointer no-underline"
                        style={{ borderRadius: '8px', letterSpacing: '0.12em' }}
                    >
                        Apply Now
                    </a>
                </div>
                                

                {/* Scholarship Criteria Section */}
                <div className="bg-white block-scholarship-criteria br3">
                    <h3 className="f4 fw7 pc-dark-gray mb3">Scholarship Criteria</h3>
                    <ul className="flex flex-column details-list-scholarship">
                            <li className="f5 pc-dark-gray ma0">
                                Demonstrated academic excellence or research achievements
                            </li>
                            <li className="f5 pc-dark-gray ma0">
                                Strong performance in the technical assessment
                            </li>
                            <li className="f5 pc-dark-gray ma0">
                                Personal or family hardship
                            </li>
                            <li className="f5 pc-dark-gray ma0">
                                Clear motivation and commitment aligned with the program's mission
                            </li>
                    </ul>
                    
                    {/* Important Note */}
                    <div className="bg-red-5 pa3 br3">
                        <div className="flex items-center">
                            <span className="mr2" style={{display:'inline-flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:'#731013'}}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                              </svg>
                            </span>
                            <p className="f6 ma0">
                                Applicants who meet multiple criteria will be prioritized during the scholarship review process. 
                                Final results will be sent directly to your registered email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Fee;
