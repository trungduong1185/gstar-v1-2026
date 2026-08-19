import '../css/tachyons.min.css';
import '../css/styles.css';
import Countdown from 'react-countdown';
import { countdown, register_link as registerLink } from '../assets/data.json';

const pad = (n) => String(n).padStart(2, '0');

const HtmlCountDown = ({ d, h, m, s }) => (
  <section
    className="hero-2026"
    style={{
      backgroundImage:
        "linear-gradient(rgba(5, 5, 10, 0.72), rgba(5, 5, 10, 0.82)), url('images/bg_nti_ai_bootcamp.webp')",
    }}
  >
    <div className="hero-2026-inner">
      <div className="hero-eyebrow">NTI Global Talent Program 2026</div>

      <h1 className="hero-title">GStar Bootcamp</h1>

      <div className="hero-subtitle">
        Empowering future AI leaders in Asia-Pacific and beyond.
      </div>

      <p className="hero-desc">
        A 14-week, fully online accelerator that equips emerging AI talents with
        cutting-edge technical expertise and leadership skills, culminating in a
        showcase at Demo Day and the GStar Summit.
      </p>

      <div className="hero-countdown-old flex flex-wrap justify-center items-center mt4 pc-white-title">
        <div className="khoiVuong flex justify-center items-center flex-column">
          <p className="ttu">DAYS</p>
          <p className="soTo">{d}</p>
        </div>
        <p className="soTo ph3">:</p>
        <div className="khoiVuong flex justify-center items-center flex-column">
          <p className="ttu">HOURS</p>
          <p className="soTo">{pad(h)}</p>
        </div>
        <p className="soTo ph3">:</p>
        <div className="khoiVuong flex justify-center items-center flex-column">
          <p className="ttu">MINUTES</p>
          <p className="soTo">{pad(m)}</p>
        </div>
        <p className="soTo ph3">:</p>
        <div className="khoiVuong flex justify-center items-center flex-column">
          <p className="ttu">SECONDS</p>
          <p className="soTo">{pad(s)}</p>
        </div>
      </div>

      <div className="w-100 tc hero-cta-old" style={{ flexDirection: 'column' }}>
        <div
          className="btnApply dib ph6 pv3 br3 fw7 f4 pointer dim mt4"
          onClick={() => window.open(registerLink, '_blank')}
        >
          APPLY NOW
        </div>
        <p style={{ color: 'white', marginTop: 16 }}>*Deadline: {countdown.deadline}</p>
      </div>
    </div>
  </section>
);

const MainCountDown = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <HtmlCountDown d={0} h={0} m={0} s={0} />;
    }
    return <HtmlCountDown d={days} h={hours} m={minutes} s={seconds} />;
  };

  return (
    <Countdown
      date={countdown.time_to_start}
      intervalDelay={1000}
      precision={3}
      renderer={renderer}
    />
  );
};

export default MainCountDown;
