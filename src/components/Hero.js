import { PiHandWaving, PiSmiley } from 'react-icons/pi';
import { MdSportsTennis } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const photos = [
  { src: `${process.env.PUBLIC_URL}/photos/animal1.jpg`, alt: 'Me with animals' },
  { src: `${process.env.PUBLIC_URL}/photos/animal2.jpg`, alt: 'Me with animals' },
  { src: `${process.env.PUBLIC_URL}/photos/animal3.jpg`, alt: 'Me with animals' },
  { src: `${process.env.PUBLIC_URL}/photos/animal4.jpg`, alt: 'Me with animals' },
];

function VerticalScroll() {
  return (
    <div className="vscroll-wrapper">
      <div className="vscroll-track">
        {[...photos, ...photos].map((photo, i) => (
          <div className="vscroll-frame" key={i}>
            <img
              src={photo.src}
              alt={photo.alt}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="vscroll-placeholder">📷</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-blob blob-1" />
      <div className="hero-bg-blob blob-2" />

      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-name">
            Hello! I'm Yuhsuan <PiHandWaving className="hero-wave" size={40} />
          </h1>

          <div className="hero-intro-card">
            <p>I'm a graduate in Information Technology from UQ, passionate about building practical web and mobile applications, with a growing interest in AI integration.</p>
            <p>This is my second year living in Australia, and I have to say, the weather is amazing and the animals are even better. I recently discovered that I love horse riding, even if I still scream a little when the horse goes too fast.</p>
            <p>I also play tennis at the uni courts, though "play" might be a bit generous. Let's just say the ball spends more time flying over the fence than it does over the net. <MdSportsTennis className="inline-icon" size={20} /></p>
            <p>Welcome to my portfolio, I'm excited to share my projects with you! <PiSmiley className="inline-icon" size={20} /></p>

            <div className="hero-contact-links">
              <a href="mailto:yuhsaun8943@gmail.com" className="hero-contact-link">
                <HiOutlineMail size={18} />
                yuhsaun8943@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/yuhsuancheng0403/" target="_blank" rel="noopener noreferrer" className="hero-contact-link">
                <FaLinkedin size={18} color="#0A66C2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <VerticalScroll />
        </div>
      </div>
    </section>
  );
}
