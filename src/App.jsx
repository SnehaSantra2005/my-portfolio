import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

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


      {/* ================= HERO ================= */}

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

          <div className="floating-star">✦</div>

        </div>

      </section>


      {/* ================= TECH MARQUEE ================= */}

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


      {/* ================= ABOUT ================= */}

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


      {/* ================= PROJECTS ================= */}

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


        <div className="projects">


          {/* STYLE NEW */}

          <article className="project project-large">

            <div className="project-number">
              01
            </div>

            <div className="project-preview stylenew-preview">

              <div className="preview-window">

                <div className="preview-nav">
                  <strong>StyleNew</strong>

                  <div>
                    HOME &nbsp; SHOP &nbsp; CART
                  </div>
                </div>

                <div className="preview-content">

                  <p>WOMEN'S CARE</p>

                  <h4>
                    Discover
                    <br />
                    Your Style.
                  </h4>

                  <div className="preview-products">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>

                </div>

              </div>

            </div>


            <div className="project-content">

              <div>

                <p className="project-category">
                  FULL STACK E-COMMERCE
                </p>

                <h3>
                  StyleNew
                </h3>

                <p className="project-description">
                  A modern e-commerce platform for women's
                  care products, built with a focus on clean
                  UI and smooth user experience.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                </div>

              </div>

              <a href="#" className="project-arrow">
                View Project ↗
              </a>

            </div>

          </article>


          {/* CAMPLY */}

          <article className="project project-small">

            <div className="project-number">
              02
            </div>

            <div className="project-preview camply-preview">

              <div className="camply-logo">
                CAMP
                <br />
                <em>LY</em>
              </div>

              <div className="camply-sun"></div>

            </div>


            <div className="project-content">

              <div>

                <p className="project-category">
                  WEB APPLICATION
                </p>

                <h3>
                  Camply
                </h3>

                <p className="project-description">
                  A modern camping and outdoor experience
                  platform designed with a simple and engaging
                  interface.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                </div>

              </div>

              <a href="https://camplyy.netlify.app/#" className="project-arrow">
                View Project ↗
              </a>

            </div>

          </article>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

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


      {/* ================= EDUCATION ================= */}

      <section className="section education-section" id="education">

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


      {/* ================= RESUME ================= */}

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

        <a href="/resume.pdf" className="resume-button">
          Download Resume
          <span>↓</span>
        </a>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="contact-section" id="contact">

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
          href="snehas8100@gmail.com"
          className="contact-button"
        >
          Get in touch ↗
        </a>


        <div className="social-links">

          <a href="https://github.com/SnehaSantra2005">
            GitHub ↗
          </a>

          <a href="https://www.linkedin.com/in/sneha-santra-07279a301/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIHsIGxNBSvy1kkNGanB9RA%3D%3D">
            LinkedIn ↗
          </a>

          <a href="snehas8100@gmail.com">
            Email ↗
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

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