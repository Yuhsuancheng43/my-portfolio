import { FiLayout, FiServer, FiTool } from 'react-icons/fi';
import { BsController } from 'react-icons/bs';
import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    icon: <FiLayout size={22} />,
    skills: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Responsive Design'],
  },
  {
    category: 'Backend',
    icon: <FiServer size={22} />,
    skills: ['Node.js', 'Python', 'REST APIs', 'SQL & NoSQL'],
  },
  {
    category: 'Game Dev',
    icon: <BsController size={22} />,
    skills: ['Unity (C#)', 'Game Design', 'Physics Systems', 'Audio Integration'],
  },
  {
    category: 'Tools & DevOps',
    icon: <FiTool size={22} />,
    skills: ['Git & GitHub', 'VS Code', 'Figma', 'Agile / Scrum'],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Skills & <span>Technologies</span></h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.category}>
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="skill-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
