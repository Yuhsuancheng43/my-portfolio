import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <p className="section-label">About Me</p>
        <h2 className="section-title">Who I <span>Am</span></h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a computer science student with a strong passion for building things — whether
              it's web applications, games, or developer tools. I love turning complex problems
              into clean, elegant solutions.
            </p>
            <p>
              My journey started with game development, which taught me to think about systems,
              user experience, and performance all at once. That foundation shapes how I approach
              every project I work on today.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new tech, playing strategy games,
              or tinkering with creative side projects.
            </p>

            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Taiwan</span>
              </div>
              <div className="info-item">
                <span className="info-label">Focus</span>
                <span className="info-value">Full-Stack & Game Dev</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value info-available">Open to opportunities</span>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">10+</span>
              <span className="stat-desc">Projects Completed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-desc">Years of Coding</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">5+</span>
              <span className="stat-desc">Technologies Used</span>
            </div>
            <div className="stat-card stat-card-accent">
              <span className="stat-number">∞</span>
              <span className="stat-desc">Curiosity & Drive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
