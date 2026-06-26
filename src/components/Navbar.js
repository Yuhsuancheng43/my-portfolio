import { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['Projects', 'Skills'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a className="navbar-logo" href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="navbar-avatar">
            <img src={`${process.env.PUBLIC_URL}/avatar.jpg`} alt="Yuhsuan" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            <span className="avatar-fallback">YH</span>
          </div>
          <span className="navbar-name">Yuhsuan</span>
        </a>

        <ul className="navbar-links">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => handleNav(l)}>{l}</button>
            </li>
          ))}
        </ul>

        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <button key={l} onClick={() => handleNav(l)}>{l}</button>
        ))}
      </div>
    </nav>
  );
}
