import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center">
            <div className="text-center">
                <motion.h1
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Hello, I'm <span className="text-yellow-400">Your Name</span>
                </motion.h1>
                <p className="text-xl mb-6">A Full-Stack Developer specializing in modern web applications</p>
                <a
                    href="#contact"
                    className="bg-yellow-400 text-black px-6 py-3 rounded shadow-lg hover:bg-yellow-300"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
};

export default Hero;
