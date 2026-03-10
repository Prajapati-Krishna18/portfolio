import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import Button from '../ui/Button';

export default function Hero() {
    return (
        <section id="home" className="section-hero min-h-screen flex items-center relative overflow-hidden">
            {/* Background Orbs */}
            <div className="gradient-orb gradient-orb-1" />
            <div className="gradient-orb gradient-orb-2" />

            <div className="content-container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-primary-400 font-medium mb-4"
                        >
                            👋 Hello, I&apos;m
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                        >
                            <span className="text-gradient">KRISHNA PRAJAPATI</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 mb-8"
                        >
                            Full Stack Developer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0"
                        >
                            I craft beautiful, performant web experiences with modern technologies.
                            Passionate about clean code, accessible design, and innovative solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <Button href="#projects" variant="primary">
                                View My Work
                            </Button>
                            <Button href="#contact" variant="secondary">
                                Get In Touch
                            </Button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-4 mt-10 justify-center lg:justify-start"
                        >
                            <a href="https://github.com/Prajapati-Krishna18" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FiGithub className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/krishna-prajapati-45ba713ab/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FiLinkedin className="w-5 h-5" />
                            </a>
                            <button
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = '/resume/Krishna_Prajapati_Resume.pdf';
                                    link.download = 'Krishna_Prajapati_Resume.pdf';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                                className="social-link"
                                aria-label="Download Resume"
                            >
                                <FiDownload className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image/Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex-shrink-0"
                    >
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1">
                                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center text-6xl">
                                    <img src="https://i.postimg.cc/50JwZSMm/professional-edit.jpg" alt="Krishna" className='proffesional
                                    ' />
                                </div>
                            </div>
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl glass flex items-center justify-center text-3xl"
                            >
                                ⚡
                            </motion.div>
                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-4 -left-4 w-16 h-16 rounded-xl glass flex items-center justify-center text-2xl"
                            >
                                🚀
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <motion.a
                        href="#about"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center text-gray-500 hover:text-gray-300 transition-colors"
                    >
                        <span className="text-sm mb-2">Scroll Down</span>
                        <FiArrowDown className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
