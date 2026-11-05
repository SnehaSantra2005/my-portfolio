// src/data/projects.js

const projects = [
    {
        id: 1,
        title: "Camping Website",
        category: "Frontend",
        type: "CAMPING & OUTDOOR",
        description:
            "A modern and responsive camping website designed to showcase outdoor destinations with an engaging and user-friendly interface.",
        image: "/projects/camping.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "",
        live: "https://camplyy.netlify.app/",
    },
    {
        id: 2,
        title: "Portfolio Website",
        category: "React",
        type: "PERSONAL PORTFOLIO",
        description:
            "A modern personal portfolio website designed to showcase my skills, projects, education and development journey.",
        image: "/projects/portfolio.png",
        technologies: ["React", "JavaScript", "CSS"],
        github: "",
        live: "https://my-portfolio-nu-ruddy-27.vercel.app/",
    },
    {
        id: 3,
        title: "3-D Website",
        category: "Frontend",
        type: "3D WEB EXPERIENCE",
        description:
            "An interactive 3D website focused on creating an immersive visual experience with modern web technologies.",
        image: "/projects/3d-website.png",
        technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
        github: "",
        live: "https://3-d-website-tau-ten.vercel.app/",
    },
    {
        id: 4,
        title: "To-Do List",
        category: "Frontend",
        type: "PRODUCTIVITY APP",
        description:
            "A simple and interactive To-Do List application for organizing daily tasks with a clean and easy-to-use interface.",
        image: "/projects/todo.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "",
        live: "https://to-do-list-roan-nine-83.vercel.app/",
    },

    // Add your future projects below this line.


    {
        id: 5,
        title: "AgriSense",
        category: "Machine Learning",
        type: "SMART CROP RECOMMENDATION SYSTEM",
        description:
            "An ML-powered crop recommendation system that suggests suitable crops based on soil nutrients and environmental conditions. Built using Flask with a Random Forest model and SQLite database.",
        image: "/projects/agrisense.png",
        technologies: [
            "Python",
            "Flask",
            "Machine Learning",
            "Scikit-learn",
            "HTML",
            "CSS",
            "JavaScript",
            "SQLite"
        ],
        github: "",
        live: "https://agrisense-crop-recommendation-e6htt21xb-sneha-santras-projects.vercel.app/",
        featured: true,
    },
    {
        id: 6,
        title: "QuizMaster",
        category: "React",
        type: "INTERACTIVE QUIZ APPLICATION",
        description:
            "An interactive quiz application featuring multiple categories, difficulty levels, timed quizzes and a performance dashboard to track learning progress.",
        image: "/projects/quizmaster.png",
        technologies: [
            "React",
            "JavaScript",
            "CSS",
            "Node.js",
            "Express.js"
        ],
        github: "",
        live: "https://quiz-master-teal-two.vercel.app/",
        featured: true,
    },
];

export default projects;