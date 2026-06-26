import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ImSmile } from "react-icons/im";
import './Projects.css';

const travelAgent = {
  title: 'Personalised Multimodal Travel Memory Agent',
  desc: 'A RAG-based AI agent that lets you query your personal travel memories using both text and images. Built with LangGraph and CLIP embeddings for cross-modal search over a ChromaDB knowledge base.',
  highlight: "What I found really interesting is that I assumed the full multimodal agent would perform the best, but it turns out text-only retrieval actually outperformed the hybrid approach on my test set. My guess is that the limited size of the dataset meant there wasn't enough visual data for the multimodal approach to show its advantage. Sometimes simpler really is better.",
  tags: ['Python', 'LangGraph', 'CLIP', 'ChromaDB', 'RAG'],
  period: 'May 2026',
};

const mickMedia = [
  { type: 'image', src: `${process.env.PUBLIC_URL}/photos/mick1.jpeg` },
  { type: 'image', src: `${process.env.PUBLIC_URL}/photos/mick2.jpeg` },
  { type: 'video', src: `${process.env.PUBLIC_URL}/videos/mick.MOV` },
];

const mickProject = {
  title: 'Old Mick and the Emus (Group Project)',
  desc: 'A hybrid AR board game where a physical board tracked by an overhead camera drives a browser-based game frontend in real time. The camera detects ArUco fiducial markers and streams game state via WebSocket.',
  highlight: 'I switched the frontend from React to Phaser for better real-time rendering performance. React is great when users are interacting with the page, but for our game, we just needed to display what was happening on the physical board as fast as possible. Phaser handles that kind of continuous rendering much more naturally, and it turned out to be one of the best decisions we made for the project.',
  tags: ['JavaScript', 'Phaser', 'WebSocket', 'Python', 'ArUco'],
  period: 'May 2026',
};

const readySetHireMedia = [
  { type: 'image', src: `${process.env.PUBLIC_URL}/photos/readysethire1.jpeg` },
  { type: 'image', src: `${process.env.PUBLIC_URL}/photos/readysethire2.jpeg` },
  { type: 'image', src: `${process.env.PUBLIC_URL}/photos/readysethire3.jpeg` },
];

const readySetHireProject = {
  title: 'ReadySetHire — AI Interview Platform',
  desc: 'A web app for recruiters to create interviews and evaluate applicants. Applicant answers are transcribed in-browser using a Hugging Face speech-to-text model, meaning all audio processing happens directly in the browser and no audio is ever sent to a server.',
  highlight: 'I built a GenAI feature that auto-generates interview questions based on job role and difficulty level. While the platform was designed for recruiters, I kept thinking it could also be really useful for job seekers to practice with. As someone currently preparing for interviews myself, that idea feels very relevant right now.',
  tags: ['React', 'JavaScript', 'Hugging Face', 'GenAI'],
  period: 'Sep 2025',
};

const projects = [
  {
    title: 'FormBase',
    desc: 'Mobile app for creating custom forms with dynamic fields — text, dropdown, image/camera capture, and GPS location — with map visualisation of location-based records.',
    tags: ['React Native', 'Expo', 'TypeScript'],
    period: 'Oct 2025',
  },
  {
    title: 'Batch Course Conversion Tool',
    desc: 'A CLI tool that batch-converts OpenEdx OLX courses to LiaScript Markdown, parsing nested XML and handling HTML, video, and quiz content types.',
    tags: ['Node.js', 'JavaScript', 'Jest'],
    period: 'Aug 2025',
  },
  {
    title: 'TableTap — QR Ordering System',
    desc: 'A SaaS platform for restaurants where customers scan a QR code to browse the menu and order from their seat. Supports multi-restaurant management with separate admin and customer interfaces.',
    tags: ['Python', 'Django', 'Bootstrap 5'],
    period: 'May 2025',
  },
];

function Slideshow({ media }) {
  const [index, setIndex] = useState(0);
  const current = media[index];

  return (
    <div className="slideshow">
      <div className="slideshow-media">
        {current.type === 'video' ? (
          <video
            key={current.src}
            src={current.src}
            autoPlay
            muted
            loop
            playsInline
            className="project-video"
            onLoadedMetadata={(e) => { e.target.playbackRate = 2; }}
          />
        ) : (
          <img src={current.src} alt="" className="slideshow-img" />
        )}
      </div>

      {media.length > 1 && (
        <>
          <button
            className="slide-btn slide-btn-left"
            onClick={() => setIndex((i) => (i - 1 + media.length) % media.length)}
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            className="slide-btn slide-btn-right"
            onClick={() => setIndex((i) => (i + 1) % media.length)}
          >
            <FiChevronRight size={20} />
          </button>
          <div className="slide-dots">
            {media.map((_, i) => (
              <button
                key={i}
                className={`slide-dot${i === index ? ' active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Academic <span>Projects</span></h2>

        {/* Travel Memory Agent */}
        <div className="project-card-video">
          <div className="project-video-side">
            <video
              src={`${process.env.PUBLIC_URL}/videos/travel-agent.mov`}
              autoPlay
              muted
              loop
              playsInline
              className="project-video"
              onLoadedMetadata={(e) => {
                e.target.playbackRate = 2;
                e.target.nextSibling.style.display = 'none';
              }}
            />
            <div className="project-video-placeholder">
              <span>Demo video coming soon</span>
            </div>
          </div>
          <div className="project-video-info">
            <span className="project-period">{travelAgent.period}</span>
            <h3 className="project-title-featured">{travelAgent.title}</h3>
            <p className="project-desc-featured">{travelAgent.desc}</p>
            <p className="project-highlight">{travelAgent.highlight}</p>
            <div className="project-tags">
              {travelAgent.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Old Mick and the Emus — slideshow card (text left, media right) */}
        <div className="project-card-video">
          <div className="project-video-info">
            <span className="project-period">{mickProject.period}</span>
            <h3 className="project-title-featured">{mickProject.title}</h3>
            <p className="project-desc-featured">{mickProject.desc}</p>
            <p className="project-highlight">{mickProject.highlight}</p>
            <div className="project-tags">
              {mickProject.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="project-video-side">
            <Slideshow media={mickMedia} />
          </div>
        </div>

        {/* ReadySetHire — slideshow card (media left, text right) */}
        <div className="project-card-video">
          <div className="project-video-side">
            <Slideshow media={readySetHireMedia} />
          </div>
          <div className="project-video-info">
            <span className="project-period">{readySetHireProject.period}</span>
            <h3 className="project-title-featured">{readySetHireProject.title}</h3>
            <p className="project-desc-featured">{readySetHireProject.desc}</p>
            <p className="project-highlight">{readySetHireProject.highlight} <ImSmile className="inline-icon" size={18} /></p>
            <div className="project-tags">
              {readySetHireProject.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-card-body">
                <span className="project-period">{p.period}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                {p.highlight && <p className="project-highlight">{p.highlight}</p>}
              </div>
              <div className="project-tags">
                {p.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
