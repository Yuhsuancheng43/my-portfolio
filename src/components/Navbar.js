import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner container navbar-inner-centered">
        <a className="navbar-logo" href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="navbar-avatar">
            <img src={`${process.env.PUBLIC_URL}/avatar.jpg`} alt="Tanya" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            <span className="avatar-fallback">YH</span>
          </div>
          <span className="navbar-name">Yuhsuan · Portfolio</span>
        </a>
      </div>
    </nav>
  );
}
