import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';

const testimonials = [
  {
    quote: '"I deeply improved my understanding of ML systems, and learned how to use AI coding agents without creating tech debt. Development at my startup got more than 3x faster."',
    name: 'Geremie Yeo',
    bio: 'Singapore · Founding Engineer at an AI startup · Kaggle Grandmaster, top 150 worldwide',
  },
  {
    quote: '"For me, GStar was almost life-changing. The talent density in the cohort left the deepest impression on me. People I could soundboard ideas with, who helped me grow."',
    name: 'Dhruv Agarwal',
    bio: 'India · AI engineer · Built fraud-detection systems at Visa',
  },
  {
    quote: '"GStar gave me a chance to explore the foundations and future directions of LLM research in depth."',
    name: 'Khang Nguyen',
    bio: 'USA · BSc in Computer Science, Michigan State University',
  },
];

const Testimonials = () => (
  <section className="tm-section">
    <div className="container center">
      <h2 className="f2 fw7 ttu tracked-l tc mb0" style={{ color: '#ffffff' }}>
        What participants said
      </h2>

      <div className="tm-grid">
        {testimonials.map((t, i) => (
          <figure key={i} className="tm-card">
            <blockquote className="tm-quote">{t.quote}</blockquote>
            <figcaption className="tm-caption">
              <strong className="tm-name">{t.name}</strong>
              {t.bio}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
