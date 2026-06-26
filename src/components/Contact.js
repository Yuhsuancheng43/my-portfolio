import { HiOutlineMail } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let's <span>Connect</span></h2>

        <div className="contact-inner">
          <div className="contact-text">
            <p>
              I'm currently open to new opportunities, collaborations, and interesting conversations.
              Whether you have a project in mind, a question, or just want to say hello — my inbox is always open.
            </p>
            <p>
              I'll do my best to get back to you within a day or two!
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <HiOutlineMail size={32} />
            </div>
            <p className="contact-cta-text">Send me an email and let's build something together.</p>
            <a className="btn-primary contact-btn" href="mailto:yuhsaun8943@gmail.com">
              yuhsaun8943@gmail.com
            </a>

            <div className="contact-links">
              <a href="https://github.com/wrongwrongwrong" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiGithub size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
