import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <div className="footer-avatar">
            <img src="/avatar.jpg" alt="Yuhsuan" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            <span className="footer-avatar-fallback">YH</span>
          </div>
          <span>Yuhsuan</span>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Yuhsuan Cheng All Rights Reserved.</p>
        <a href="#hero" className="footer-top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
