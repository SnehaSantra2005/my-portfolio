import { useState } from "react";
import "./App.css";

/* ==================================================
   PROJECT DATA
================================================== */

const projects = [
  {
    id: 1,
    title: "Camping Website",
    category: "Web",
    type: "CAMPING & OUTDOOR",
    description:
      "A modern and responsive camping website designed to showcase outdoor destinations with an engaging and user-friendly interface.",
    image: "/projects/camping.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },

  {
    id: 2,
    title: "Portfolio Website",
    category: "Web",
    type: "PERSONAL PORTFOLIO",
    description:
      "A modern personal portfolio website designed to showcase my skills, projects, education and development journey.",
    image: "/projects/portfolio.png",
    technologies: ["React", "JavaScript", "CSS"],
    github: "#",
    live: "https://my-portfolio-nu-ruddy-27.vercel.app/",
  },

  {
    id: 3,
    title: "3-D Website",
    category: "Web",
    type: "3D WEB EXPERIENCE",
    description:
      "An interactive 3D website focused on creating an immersive visual experience with modern web technologies.",
    image: "/projects/3d-website.png",
    technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
    github: "#",
    live: "#",
  },

  {
    id: 4,
    title: "To-Do List",
    category: "Web",
    type: "PRODUCTIVITY APP",
    description:
      "A simple and interactive To-Do List application for organizing daily tasks with a clean and easy-to-use interface.",
    image: "/projects/todo.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
];

/* ==================================================
   APP
================================================== */

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

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <nav className="navbar">

        <a href="#home" className="logo">
          SNEHA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-talk">
          Let's Talk <span>↗</span>
        </a>

      </nav>


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="hero" id="home">

        <div className="hero-left">

          <p className="eyebrow">
            HELLO, I'M SNEHA
          </p>

          <h1>
            I MAKE
            <br />
            <em>IDEAS</em>
            <br />
            HAPPEN<span>.</span>
          </h1>

          <p className="hero-description">
            B.Tech IT student and aspiring software developer
            passionate about building beautiful, functional and
            meaningful digital experiences.
          </p>

          <div className="hero-buttons">

            <a href="#work" className="primary-button">
              Explore My Work
              <span>↗</span>
            </a>

            <a href="#about" className="secondary-button">
              More about me ↓
            </a>

          </div>

        </div>


        <div className="hero-right">

          <div className="photo-wrapper">

            <div className="photo-ring"></div>

            <img
              src="/profile.jpg"
              alt="Sneha"
              className="profile-photo"
            />

            <div className="photo-tag">
              <span>CREATIVE</span>
              <span>DEVELOPER</span>
            </div>

          </div>

          <div className="hero-year">
            2026
          </div>

          <div className="floating-star">
            ✦
          </div>

        </div>

      </section>


      {/* ==================================================
          TECHNOLOGY STRIP
      ================================================== */}

      <div className="tech-strip">

        <div className="tech-track">

          <span>C</span>
          <i>✦</i>

          <span>C++</span>
          <i>✦</i>

          <span>JAVA</span>
          <i>✦</i>

          <span>SQL</span>
          <i>✦</i>

          <span>HTML</span>
          <i>✦</i>

          <span>CSS</span>
          <i>✦</i>

          <span>JAVASCRIPT</span>
          <i>✦</i>

          <span>DBMS</span>
          <i>✦</i>

          <span>REACT</span>
          <i>✦</i>

        </div>

      </div>


      {/* ==================================================
          ABOUT
      ================================================== */}

      <section className="section about-section" id="about">

        <div className="section-number">
          01
        </div>

        <div className="section-heading">

          <p>GET TO KNOW ME</p>

          <h2>
            A little bit
            <br />
            <em>about me.</em>
          </h2>

        </div>


        <div className="about-layout">

          <div className="about-main">

            <p className="about-big">
              I'm Sneha — an Information Technology student
              who enjoys turning ideas into clean, useful and
              engaging digital experiences.
            </p>

          </div>


          <div className="about-details">

            <p>
              I'm passionate about software development,
              web development and problem solving. I enjoy
              learning new technologies and applying them
              through practical projects.
            </p>

            <p>
              Currently, I'm focusing on strengthening my
              programming, development and DSA skills while
              preparing myself for a career in technology.
            </p>

            <a href="#contact" className="underlined-link">
              Let's connect <span>↗</span>
            </a>

          </div>

        </div>

      </section>


      {/* ==================================================
          PROJECTS
      ================================================== */}

      <section className="section work-section" id="work">

        <div className="section-number">
          02
        </div>


        <div className="section-heading">

          <p>SELECTED WORK</p>

          <h2>
            Things I've
            <br />
            <em>built.</em>
          </h2>

        </div>


        {/* PROJECT FILTERS */}

        <div className="project-filters">

          {["All", "Web"].map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>


        {/* PROJECT GRID */}

        <div className="project-grid">

          {filteredProjects.map((project) => (

            <article
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

                    const placeholder =
                      e.currentTarget.nextElementSibling;

                    if (placeholder) {
                      placeholder.style.display = "flex";
                    }

                  }}
                />


                {/* FALLBACK */}

                <div className="project-image-placeholder">

                  <span>
                    {String(project.id).padStart(2, "0")}
                  </span>

                  <strong>
                    {project.title}
                  </strong>

                </div>


                {/* TOP INFORMATION */}

                <div className="project-top-info">

                  <span>
                    {String(project.id).padStart(2, "0")}
                  </span>

                  <span>
                    {project.category}
                  </span>

                </div>


                {/* HOVER */}

                <div className="project-hover">

                  <div className="project-hover-circle">
                    ↗
                  </div>

                  <span>
                    VIEW PROJECT
                  </span>

                </div>

              </div>


              {/* PROJECT CONTENT */}

              <div className="project-card-content">

                <div className="project-title-area">

                  <div>

                    <p className="project-category">
                      {project.type}
                    </p>

                    <h3>
                      {project.title}
                    </h3>

                  </div>

                  <span className="project-number">
                    {String(project.id).padStart(2, "0")}
                  </span>

                </div>


                <p className="project-description">
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="project-tags">

                  {project.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>


                {/* PROJECT LINKS */}

                <div className="project-links">

                  {project.github !== "#" && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>

                  )}


                  {project.live !== "#" && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>

                  )}


                  {project.github === "#" &&
                    project.live === "#" && (

                      <span className="project-status">
                        PROJECT SHOWCASE
                      </span>

                    )}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ==================================================
          SKILLS
      ================================================== */}

      <section className="section skills-section" id="skills">

        <div className="section-number">
          03
        </div>

        <div className="section-heading">

          <p>MY TOOLKIT</p>

          <h2>
            Skills &
            <br />
            <em>technologies.</em>
          </h2>

        </div>


        <div className="skills-list">

          <div className="skill-row">
            <span>01</span>
            <h3>C</h3>
            <p>Programming / DSA</p>
          </div>

          <div className="skill-row">
            <span>02</span>
            <h3>C++</h3>
            <p>Programming / DSA</p>
          </div>

          <div className="skill-row">
            <span>03</span>
            <h3>Java</h3>
            <p>Programming / DSA</p>
          </div>

          <div className="skill-row">
            <span>04</span>
            <h3>HTML</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-row">
            <span>05</span>
            <h3>CSS</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-row">
            <span>06</span>
            <h3>JavaScript</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-row">
            <span>07</span>
            <h3>SQL</h3>
            <p>Database Management</p>
          </div>

          <div className="skill-row">
            <span>08</span>
            <h3>Git & GitHub</h3>
            <p>Version Control</p>
          </div>

        </div>

      </section>


      {/* ==================================================
          EDUCATION
      ================================================== */}

      <section
        className="section education-section"
        id="education"
      >

        <div className="section-number">
          04
        </div>

        <div className="section-heading">

          <p>MY JOURNEY</p>

          <h2>
            Education &
            <br />
            <em>learning.</em>
          </h2>

        </div>


        <div className="education-card">

          <div className="education-year">
            2023 — 2027
          </div>

          <div>

            <p className="education-type">
              BACHELOR OF TECHNOLOGY
            </p>

            <h3>
              Information Technology
            </h3>

            <p className="college">
              Government College of Engineering and Textile
              Technology, Serampore
            </p>

          </div>

        </div>


        <div className="education-card">

          <div className="education-year">
            2023
          </div>

          <div>

            <p className="education-type">
              HIGHER SECONDARY
            </p>

            <h3>
              Higher Secondary Education
            </h3>

            <p className="college">
              Ramakrishna Vivekananda Mission Vidyabhawan
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          RESUME
      ================================================== */}

      <section className="resume-section">

        <div>

          <p>
            WANT TO KNOW MORE?
          </p>

          <h2>
            Take a look at
            <br />
            <em>my resume.</em>
          </h2>

        </div>


        <a
          href="/resume.pdf"
          className="resume-button"
          target="_blank"
          rel="noreferrer"
        >
          View Resume <span>↗</span>
        </a>

      </section>


      {/* ==================================================
          CONTACT
      ================================================== */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-number">
          05
        </div>

        <p className="contact-small">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          LET'S MAKE
          <br />
          SOMETHING <em>GREAT.</em>
        </h2>

        <a
          href="mailto:snehas8100@gmail.com"
          className="contact-button"
        >
          Get in touch ↗
        </a>


        <div className="social-links">

          <a
            href="https://github.com/SnehaSantra2005"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sneha-santra-07279a301/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:snehas8100@gmail.com">
            Email ↗
          </a>

        </div>

      </section>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer>

        <p>
          © 2026 Sneha Santra
        </p>

        <p>
          Designed & Built with ♡
        </p>

      </footer>

    </div>
  );
}

export default App;