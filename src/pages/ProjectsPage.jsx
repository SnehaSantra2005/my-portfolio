
import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "../App.css";

function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(projects.map((project) => project.category)),
    ];

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                (project) => project.category === activeCategory
            );

    return (
        <div className="portfolio all-projects-page">
            <nav className="navbar">
                <Link to="/" className="logo">
                    SNEHA<span>.</span>
                </Link>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <a href="/#about">About</a>
                    <a href="/#skills">Skills</a>
                    <a href="/#contact">Contact</a>
                </div>

                <Link to="/#contact" className="nav-talk">
                    Let's Talk <span>↗</span>
                </Link>
            </nav>

            <section className="section work-section">
                <div className="section-number">02</div>

                <div className="section-heading">
                    <p>EXPLORE MY WORK</p>
                    <h2>
                        All my
                        <br />
                        <em>projects.</em>
                    </h2>
                </div>

                <div className="project-intro">
                    <p>
                        A collection of projects built through learning,
                        experimenting and solving real-world problems.
                    </p>

                    <span>{projects.length} PROJECTS ↗</span>
                </div>

                <div className="project-filters">
                    {categories.map((category) => (
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

                <div className="project-grid">
                    {filteredProjects.map((project, index) => (
                        <article className="project-card" key={project.id}>
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

                                <div className="project-image-placeholder">
                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <strong>{project.title}</strong>
                                </div>

                                <div className="project-top-info">
                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span>{project.category}</span>
                                </div>
                            </div>

                            <div className="project-card-content">
                                <div className="project-title-area">
                                    <div>
                                        <p className="project-category">
                                            {project.type}
                                        </p>
                                        <h3>{project.title}</h3>
                                    </div>

                                    <span className="project-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-tags">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub ↗
                                        </a>
                                    )}

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Demo ↗
                                        </a>
                                    )}

                                    {!project.github && !project.live && (
                                        <span className="project-status">
                                            COMING SOON
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <p className="no-projects">
                        No projects found in this category.
                    </p>
                )}

                <div className="back-home">
                    <Link to="/">← Back to Homepage</Link>
                </div>
            </section>

            <footer>
                <p>© 2026 Sneha Santra</p>
                <p>Designed & Built with ♡</p>
            </footer>
        </div>
    );
}

export default ProjectsPage;
