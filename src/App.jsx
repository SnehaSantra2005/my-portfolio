import { useState } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Camping Website",
    category: "Web",
    type: "WEB APPLICATION",
    image: "/projects/camping.png",
    description:
      "A modern and responsive camping website designed to showcase camping destinations and create an engaging outdoor experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web",
    type: "PERSONAL PORTFOLIO",
    image: "/projects/portfolio.png",
    description:
      "A responsive personal portfolio website showcasing skills, projects, education and contact information.",
    tech: ["React", "JavaScript", "CSS"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "3-D Website",
    category: "Web",
    type: "3D WEB EXPERIENCE",
    image: "/projects/3d-website.png",
    description:
      "An interactive 3D website focused on creating an immersive and visually engaging web experience.",
    tech: ["HTML", "CSS", "JavaScript", "Three.js"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "To-Do List",
    category: "Web",
    type: "PRODUCTIVITY APPLICATION",
    image: "/projects/todo.png",
    description:
      "A simple and interactive To-Do List application for adding, managing and completing daily tasks.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
        (project) => project.category === activeCategory
      );

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">SNEHA.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          LET'S TALK ↗
        </a>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-left">
          <p className="hero-small-text">
            HELLO, I'M SNEHA
          </p>

          <h1>
            I MAKE
            <br />
            IDEAS <span>HAPPEN.</span>
          </h1>

          <p className="hero-description">
            A passionate Information Technology student who loves
            creating modern websites and learning new technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              VIEW MY WORK ↗
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              VIEW RESUME ↗
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-wrapper">
            <img src="/profile.jpg" alt="Sneha" />
          </div>

          <div className="year">2026</div>
          <div className="star">✦</div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="marquee">
        <div className="marquee-content">
          C • C++ • JAVA • SQL • HTML • CSS • JAVASCRIPT • REACT • DBMS •
          C • C++ • JAVA • SQL • HTML • CSS • JAVASCRIPT • REACT • DBMS •
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <section className="about-section" id="about">
        <div className="section-label">
          01 — ABOUT ME
        </div>

        <div className="about-content">
          <h2>
            I LOVE TURNING
            <br />
            <span>IDEAS INTO REALITY.</span>
          </h2>

          <div className="about-text">
            <p>
              I'm Sneha Santra, an Information Technology student
              passionate about web development and software development.
            </p>

            <p>
              I enjoy creating clean, responsive and user-friendly
              websites while continuously improving my programming
              and problem-solving skills.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="projects-section" id="projects">

        <div className="section-header">
          <div className="section-label">
            02 — SELECTED WORK
          </div>

          <h2>
            PROJECTS THAT
            <br />
            <span>MATTER.</span>
          </h2>
        </div>

        {/* FILTERS */}
        <div className="project-filters">
          {["All", "Web"].map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? "active" : ""
                }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="project-grid">

          {filteredProjects.map((project) => (
            <div
              className="project-card"
              key={project.id}
            >

              {/* PROJECT IMAGE */}
              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display =
                      "flex";
                  }}
                />

                <div className="project-image-placeholder">
                  <span>
                    0{project.id}
                  </span>

                  <strong>
                    {project.title}
                  </strong>
                </div>

                <div className="project-overlay">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      VIEW ↗
                    </a>
                  )}
                </div>

              </div>

              {/* PROJECT CONTENT */}
              <div className="project-card-content">

                <div className="project-title-row">

                  <div>
                    <p className="project-category">
                      {project.type}
                    </p>

                    <h3>
                      {project.title}
                    </h3>
                  </div>

                  <span className="project-category-badge">
                    {project.category}
                  </span>

                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GITHUB ↗
                    </a>
                  )}

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LIVE DEMO ↗
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="skills-section" id="skills">

        <div className="section-label">
          03 — SKILLS
        </div>

        <h2>
          MY <span>TOOLKIT.</span>
        </h2>

        <div className="skills-grid">
          <div>C</div>
          <div>C++</div>
          <div>Java</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>SQL</div>
          <div>Git & GitHub</div>
        </div>

      </section>

      {/* ================= EDUCATION ================= */}
      <section
        className="education-section"
        id="education"
      >

        <div className="section-label">
          04 — EDUCATION
        </div>

        <div className="education-item">

          <span>
            2023 — 2027
          </span>

          <div>
            <h3>
              B.Tech in Information Technology
            </h3>

            <p>
              Government College of Engineering and
              Textile Technology, Serampore
            </p>
          </div>

        </div>

        <div className="education-item">

          <span>
            2023
          </span>

          <div>
            <h3>
              Higher Secondary
            </h3>

            <p>
              Ramakrishna Vivekananda Mission Vidyabhawan
            </p>
          </div>

        </div>

      </section>

      {/* ================= RESUME ================= */}
      <section className="resume-section">

        <div>
          <p>
            WANT TO KNOW MORE?
          </p>

          <h2>
            CHECK OUT MY RESUME.
          </h2>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          VIEW RESUME ↗
        </a>

      </section>

      {/* ================= CONTACT ================= */}
      <section
        className="contact-section"
        id="contact"
      >

        <div className="section-label">
          05 — CONTACT
        </div>

        <h2>
          LET'S MAKE
          <br />
          SOMETHING <span>GREAT.</span>
        </h2>

        <a
          href="mailto:snehas8100@gmail.com"
          className="email-link"
        >
          snehas8100@gmail.com ↗
        </a>

        <div className="social-links">

          <a
            href="https://github.com/SnehaSantra2005"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sneha-santra-07279a301/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>
          © 2026 SNEHA SANTRA
        </p>

        <p>
          BUILT WITH PASSION & CODE.
        </p>
      </footer>

    </div>
  );
}

export default App;