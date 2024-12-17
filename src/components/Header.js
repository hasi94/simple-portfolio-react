import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 fixed w-full top-0 shadow-lg z-10">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">MyPortfolio</h1>
                <nav className="space-x-4">
                    <a href="#home" className="hover:text-yellow-400">Home</a>
                    <a href="#about" className="hover:text-yellow-400">About</a>
                    <a href="#projects" className="hover:text-yellow-400">Projects</a>
                    <a href="#contact" className="hover:text-yellow-400">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
