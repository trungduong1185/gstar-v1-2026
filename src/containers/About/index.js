import React from 'react';
import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';

const About = () => {
  return (
    <section id="about" className="about-section w-100 center block-pt-pb">
      <div className="container">
        <div className="flex flex-wrap items-center">
          {/* Left Column - Text Content */}
          <div className="w-100 w-50-l pr4-l">
            <div className="mb4">
              <h3 className="f4 fw6 mb2 red">Why GStar</h3>
              <h2 className="f2 fw7 mb4 about-title ttu">
                About the <span className="red">Program</span>
              </h2>
            </div>

            <p className="font-body mb3">
              GStar is a global AI talent program designed to fast-track
              individual talents, especially rising leaders from Asia-Pacific and
              beyond, into the global AI world.
            </p>
            <p className="font-body mb4">
              Over 14 weeks, you work on real research and industry projects under
              the guidance of NTI&rsquo;s international advisors and partner
              companies.
            </p>

            <a
              href="/2025"
              target="_blank"
              rel="noreferrer"
              className="about-pill dib ttu fw6 pointer"
            >
              See GStar Bootcamp 2025
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="w-100 w-50-l pl4-l mt4 mt0-l">
            <div className="relative">
              <img
                src="images/hero.webp"
                alt="Cohort 1 participants at the GenAI Summit 2025"
                className="w-100 br3 shadow-3 about-image"
                style={{ maxHeight: '360px', objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black-50 white pa3 br3 br--bottom">
                <p className="f6 ma0">
                  Jeff Dean (Program Advisor) and Thang Luong (Program Director)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
