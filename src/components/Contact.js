import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-4">Feel free to reach out to me for opportunities or collaborations.</p>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded bg-gray-900"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded bg-gray-900"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-3 rounded bg-gray-900"
                        rows="5"
                    ></textarea>
                    <button className="bg-yellow-400 text-black px-6 py-3 rounded shadow-lg hover:bg-yellow-300">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
