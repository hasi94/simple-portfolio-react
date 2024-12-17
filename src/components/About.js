import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100 text-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2">
                        <p className="mb-4">
                            I'm a passionate software developer with expertise in building scalable web applications.
                            I love creating beautiful interfaces and crafting seamless user experiences.
                        </p>
                        <p>
                            My technical stack includes React, Node.js, and Laravel. I’m always eager to learn new technologies.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://via.placeholder.com/400"
                            alt="About me"
                            className="rounded shadow-lg mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
