import React from 'react';

const projects = [
    {
        title: "Project 1",
        description: "A web app built with React and Firebase.",
        image: "https://via.placeholder.com/300",
        link: "#"
    },
    {
        title: "Project 2",
        description: "An e-commerce site using Laravel and Vue.js.",
        image: "https://via.placeholder.com/300",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="shadow-lg rounded overflow-hidden">
                            <img src={project.image} alt={project.title} />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} className="text-blue-500 hover:underline mt-2 inline-block">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
