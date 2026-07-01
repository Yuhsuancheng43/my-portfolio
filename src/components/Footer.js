import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} Yuhsuan Cheng All Rights Reserved.</p>
        <a href="#hero" className="footer-top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
