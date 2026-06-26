import './Experience.css';

const experiences = [
  {
    role: 'Game Development Project Lead',
    org: 'University Capstone Project',
    period: '2024 – 2025',
    desc: 'Led a team of 4 in developing Defend Your Pixels, a full-featured tower defense game in Unity. Coordinated game design, system architecture, and sprint planning.',
    highlights: ['Unity C# Architecture', 'Team Coordination', 'Agile Sprint Planning'],
  },
  {
    role: 'Full-Stack Web Developer',
    org: 'Personal & Freelance Projects',
    period: '2023 – Present',
    desc: 'Designed and built multiple web applications using React and Node.js. Focused on clean UI, responsive design, and maintainable code.',
    highlights: ['React', 'Node.js', 'REST APIs', 'CSS Design Systems'],
  },
  {
    role: 'Computer Science Student',
    org: 'University of Taiwan',
    period: '2022 – Present',
    desc: 'Studying core CS fundamentals including data structures, algorithms, software engineering, and system design. Actively building side projects to apply classroom knowledge.',
    highlights: ['Data Structures', 'Algorithms', 'Software Engineering'],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <p className="section-label">My Journey</p>
        <h2 className="section-title">Experience & <span>Education</span></h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-marker">
                <div className="marker-dot" />
                {i < experiences.length - 1 && <div className="marker-line" />}
              </div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-org">{exp.org}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-desc">{exp.desc}</p>
                <div className="exp-highlights">
                  {exp.highlights.map((h) => (
                    <span className="tag" key={h}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
