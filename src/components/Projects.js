import './Projects.css';

const projects = [
  {
    title: 'Defend Your Pixels',
    description:
      'A tower defense game built with Unity. Players defend their pixel base from waves of enemies using strategically placed towers with unique abilities, upgrade paths, and sound effects.',
    tags: ['Unity', 'C#', 'Game Design', 'Audio'],
    link: 'https://github.com/wrongwrongwrong/Defend-Your-Pixels',
    featured: true,
  },
  {
    title: 'Pixel Defense Tracker',
    description:
      'A web-based progress tracker for the Defend Your Pixels project. Tracks game milestones, feature completion, and development notes in a clean React interface.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: '#',
  },
  {
    title: 'Personal Portfolio',
    description:
      'This portfolio site — built from scratch with React and vanilla CSS. Features smooth scrolling, responsive design, animated blobs, and a soft purple theme.',
    tags: ['React', 'CSS', 'Responsive'],
    link: '#',
  },
  {
    title: 'REST API Server',
    description:
      'A RESTful API built with Node.js and Express. Supports CRUD operations with JWT authentication, rate limiting, and MongoDB integration.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className={`project-card${project.featured ? ' featured' : ''}`} key={project.title}>
              {project.featured && <span className="featured-badge">Featured</span>}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                {project.link && project.link !== '#' && (
                  <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
