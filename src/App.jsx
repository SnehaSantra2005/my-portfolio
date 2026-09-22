import { useState } from "react";
import "./App.css";

/* ==================================================
   PROJECT DATA
================================================== */

const projects = [
  {
    id: 1,
    title: "StyleNew",
    category: "Web",
    type: "FULL STACK E-COMMERCE",
    description:
      "A modern e-commerce platform for women's care products with a clean UI and smooth user experience.",
    image: "/projects/stylenew.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "https://stylenew-frontend2.onrender.com",
  },

  {
    id: 2,
    title: "Camply",
    category: "Web",
    type: "WEB APPLICATION",
    description:
      "A modern camping and outdoor experience platform designed with a simple and engaging interface.",
    image: "/projects/camply.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "https://camplyy.netlify.app/",
  },

  {
    id: 3,
    title: "Railway Reservation System",
    category: "Java",
    type: "DESKTOP APPLICATION",
    description:
      "A Java-based railway reservation system with login, registration, booking and dashboard features.",
    image: "/projects/railway.png",
    technologies: ["Java", "Swing", "MySQL"],
    github: "#",
    live: "#",
  },

  {
    id: 4,
    title: "Weather Application",
    category: "Python",
    type: "PYTHON APPLICATION",
    description:
      "A weather application that displays weather information using a weather API.",
    image: "/projects/weather.png",
    technologies: ["Python", "API"],
    github: "#",
    live: "#",
  },

  {
    id: 5,
    title: "Digital Clock",
    category: "Python",
    type: "PYTHON PROJECT",
    description:
      "A simple digital clock application built with Python and designed with a clean interface.",
    image: "/projects/clock.png",
    technologies: ["Python", "Tkinter"],
    github: "#",
    live: "#",
  },

  {
    id: 6,
    title: "Image Processing Project",
    category: "AI/ML",
    type: "IMAGE PROCESSING",
    description:
      "An image processing project exploring computer vision techniques using Python.",
    image: "/projects/image-processing.png",
    technologies: ["Python", "OpenCV", "AI"],
    github: "#",
    live: "#",
  },

  {
    id: 7,
    title: "Port Scanner",
    category: "Python",
    type: "NETWORKING PROJECT",
    description:
      "A GUI-based port scanner designed to scan ports and identify open services.",
    image: "/projects/port-scanner.png",
    technologies: ["Python", "Tkinter", "Networking"],
    github: "#",
    live: "#",
  },

  {
    id: 8,
    title: "Stopwatch",
    category: "Python",
    type: "PYTHON APPLICATION",
    description:
      "A simple stopwatch application with start, pause and reset functionality.",
    image: "/projects/stopwatch.png",
    technologies: ["Python", "Tkinter"],
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

          {["All", "Web", "Java", "Python", "AI/ML"].map(
            (category) => (

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

            )
          )}

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
                  }}
                />

                <div className="project-image-placeholder">

                  <span>
                    {String(project.id).padStart(2, "0")}
                  </span>

                  <strong>
                    {project.title}
                  </strong>

                </div>

                <div className="project-overlay">

                  <span>
                    {String(project.id).padStart(2, "0")}
                  </span>

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View ↗
                    </a>
                  )}

                </div>

              </div>


              {/* PROJECT CONTENT */}

              <div className="project-card-content">

                <p className="project-category">
                  {project.type}
                </p>


                <div className="project-title-row">

                  <h3>
                    {project.title}
                  </h3>

                  <span className="project-category-badge">
                    {project.category}
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
          View Resume
          <span>↗</span>
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