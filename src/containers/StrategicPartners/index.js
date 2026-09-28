import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';

const StrategicPartners = () => (
  <section className="block-pt-pb">
    <div className="container center tc">
      <h2 className="f2 fw7 tc tracked-l mb2">FOUNDATIONAL PARTNERS</h2>
      <div className="partners-grid">
        <a href="https://vng.com.vn/" target="_blank" rel="nofollow noopener noreferrer" className="partner-logo partner-logo--single">
          <img src="/images/partners/vng.svg" alt="VNG" />
        </a>
        <div className="partner-logo partner-logo--wordmark">
          <span className="partner-wordmark">
            Loi and Adele Nguyen
            <br />
            Charitable Fund
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default StrategicPartners;
