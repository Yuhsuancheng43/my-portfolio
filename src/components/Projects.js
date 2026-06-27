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

const formBaseProject = {
  title: 'FormBase',
  desc: 'Mobile app for creating custom forms with dynamic fields including text, dropdown, image/camera capture, and GPS location with map visualisation of location-based records.',
  highlight: 'This was my first mobile app, and it taught me that mobile development requires a lot more attention to detail than I expected. Things like making sure the keyboard does not cover the input field, or whether the layout is easy to read on a small screen are details that matter a lot more on mobile, where the experience feels much more personal and immediate.',
  tags: ['React Native', 'Expo', 'TypeScript'],
  period: 'Oct 2025',
};

const batchMedia = [
  { type: 'image', src: `${process.env.PUBLIC_URL}/photos/batch1.jpeg` },
  { type: 'image', src: `${process.env.PUBLIC_URL}/photos/batch2.jpeg` },
];

const batchProject = {
  title: 'Batch Course Conversion Tool',
  desc: 'A CLI tool that batch-converts OpenEdx OLX courses to LiaScript Markdown, parsing nested XML and handling HTML, video, and quiz content types.',
  highlight: 'One of the requirements for this project was to write Jest test cases to verify the conversion accuracy. Looking back, it is interesting to compare this to the Java unit tests I wrote in other courses. Jest feels a lot more lightweight and straightforward to set up, while JUnit in Java requires more structure. Both taught me that writing tests forces you to think more carefully about what your code is actually supposed to do.',
  tags: ['Node.js', 'JavaScript', 'Jest'],
  period: 'Aug 2025',
};

const tableTapMedia = [
  { type: 'image', src: `${process.env.PUBLIC_URL}/photos/table1.jpeg` },
  { type: 'image', src: `${process.env.PUBLIC_URL}/photos/table2.jpeg` },
  { type: 'image', src: `${process.env.PUBLIC_URL}/photos/table3.jpeg` },
  { type: 'image', src: `${process.env.PUBLIC_URL}/photos/table4.jpeg` },
];

const tableTapProject = {
  title: 'TableTap — QR Ordering System',
  desc: 'A SaaS platform for restaurants where customers scan a QR code to browse the menu and order from their seat. Supports multi-restaurant management with separate admin and customer interfaces.',
  highlight: 'This was my first time designing a database from scratch, and it was more challenging than I expected. Getting the relationships between tables right, deciding on primary keys, and making sure everything connected properly took a lot more thought than I initially anticipated. It gave me a much deeper appreciation for how important good database design is before you even start writing any code.',
  tags: ['Python', 'Django', 'Bootstrap 5'],
  period: 'May 2025',
};

const projects = [];

const formbaseScreenshots = [
  `${process.env.PUBLIC_URL}/photos/formbase1.jpg`,
  `${process.env.PUBLIC_URL}/photos/formbase2.jpg`,
  `${process.env.PUBLIC_URL}/photos/formbase3.jpg`,
  `${process.env.PUBLIC_URL}/photos/formbase4.jpg`,
];

function PhoneMockupGrid({ screenshots }) {
  const [page, setPage] = useState(0);
  const pages = [screenshots.slice(0, 2), screenshots.slice(2, 4)];
  const current = pages[page];

  return (
    <div className="phone-mockup-wrapper">
      <div className="phone-grid">
        {current.map((src, i) => (
          <div className="phone-mockup" key={i}>
            <div className="phone-notch" />
            <div className="phone-screen">
              <img src={src} alt={`Screenshot ${page * 2 + i + 1}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="phone-pagination">
        <button className="slide-btn-small" onClick={() => setPage(0)} disabled={page === 0}>
          <FiChevronLeft size={18} />
        </button>
        <button className="slide-btn-small" onClick={() => setPage(1)} disabled={page === 1}>
          <FiChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

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

        {/* FormBase — text left, media right */}
        <div className="project-card-video">
          <div className="project-video-info">
            <span className="project-period">{formBaseProject.period}</span>
            <h3 className="project-title-featured">{formBaseProject.title}</h3>
            <p className="project-desc-featured">{formBaseProject.desc}</p>
            {formBaseProject.highlight && <p className="project-highlight">{formBaseProject.highlight}</p>}
            <div className="project-tags">
              {formBaseProject.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="project-video-side phone-mockup-side">
            <PhoneMockupGrid screenshots={formbaseScreenshots} />
          </div>
        </div>

        {/* Batch Course Conversion Tool — media left, text right */}
        <div className="project-card-video">
          <div className="project-video-side">
            <Slideshow media={batchMedia} />
          </div>
          <div className="project-video-info">
            <span className="project-period">{batchProject.period}</span>
            <h3 className="project-title-featured">{batchProject.title}</h3>
            <p className="project-desc-featured">{batchProject.desc}</p>
            {batchProject.highlight && <p className="project-highlight">{batchProject.highlight}</p>}
            <div className="project-tags">
              {batchProject.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* TableTap — media left, text right */}
        <div className="project-card-video">
          <div className="project-video-info">
            <span className="project-period">{tableTapProject.period}</span>
            <h3 className="project-title-featured">{tableTapProject.title}</h3>
            <p className="project-desc-featured">{tableTapProject.desc}</p>
            {tableTapProject.highlight && <p className="project-highlight">{tableTapProject.highlight}</p>}
            <div className="project-tags">
              {tableTapProject.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="project-video-side">
            <Slideshow media={tableTapMedia} />
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
