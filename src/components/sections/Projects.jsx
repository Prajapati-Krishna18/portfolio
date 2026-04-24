import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiYoutube, FiBook, FiFigma, FiGrid, FiTarget, FiCopy, FiLayers, FiLayout } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const categories = [
    { id: 'All', name: 'All Projects', icon: FiGrid },
    { id: 'Games', name: 'Games', icon: FiTarget },
    { id: 'Clones', name: 'Clones', icon: FiCopy },
    { id: 'Full Stack', name: 'Full Stack', icon: FiLayers },
    { id: 'Frontend', name: 'Frontend', icon: FiLayout },
];

const projects = [
    {
        title: 'LifeLens – AI-Powered Wellness & Climate Intelligence Platform',
        description: 'An intelligent platform that analyzes daily habits such as sleep, mood, and movement to provide personalized wellness insights while tracking environmental impact.',
        image: "/photos/Lifelens.png",
        category: 'Full Stack',
        tags: ['React', 'Node.js', 'MongoDB', 'AI APIs'],
        github: 'https://github.com/Prajapati-Krishna18/lifelens-ai-dashboard/tree/main',
        live: 'https://lifelens-ai-dashboard.vercel.app/',
        youtubeDemo: '', // TODO: Add YouTube demo link
        apiDocs: '', // TODO: Add Postman API docs link
        figmaLink: '', // TODO: Add Figma design link
        featured: true,
    },
    {
        title: 'India Pincode Explorer – Smart Postal Lookup System',
        description: 'A responsive web application that allows users to search and explore Indian PIN codes with accurate location details such as state, district, and region.',
        image: "/photos/dashboard.png",
        category: 'Full Stack',
        tags: ['React', 'Node.js', 'Express', 'REST API'],
        github: 'https://github.com/Prajapati-Krishna18/india_pincode_explorer/tree/main',
        live: 'https://indiapincodeexplorer.vercel.app/',
        youtubeDemo: '', // TODO: Add YouTube demo link
        apiDocs: '', // TODO: Add Postman API docs link
        figmaLink: '', // TODO: Add Figma design link
        featured: true,
    },
    // ─── PLACEHOLDER PROJECTS ────────────────────────────────────
    // Replace these with your real projects as you build them!
    {
        title: 'Tic Tac Toe – Interactive Web Game',
        description: 'A modern Tic Tac Toe game with player names, scoreboard, and responsive UI built using React.',
        image: "/photos/tic-tac-toe.png",
        category: 'Games',
        tags: ['JavaScript', 'React', 'CSS3'],
        github: 'https://github.com/Prajapati-Krishna18/Tic_Tac_Toe/tree/main', // TODO: Add GitHub link
        live: 'https://tic-tac-toe-71.vercel.app/', // TODO: Add live link
        youtubeDemo: '', // TODO: Add YouTube demo
        featured: false,
    },
    {
        title: 'Netflix UI Clone',
        description: 'A pixel-perfect clone of the Netflix browsing interface with dynamic content loading, category rows, and responsive layout.',
        image: '/photos/Netflix_preview.png',
        category: 'Clones',
        tags: ['HTML', 'CSS'],
        github: 'https://github.com/Prajapati-Krishna18/Clones_Project/tree/main/Netflix_clone', // TODO: Add GitHub link
        live: 'https://netflixclone-ui.vercel.app/', // TODO: Add live link
        youtubeDemo: '', // TODO: Add YouTube demo
        featured: false,
    },
    {
        title: 'Nike UI Clone',
        description: 'A responsive Nike UI clone built with modern frontend techniques, showcasing dynamic content layouts, product sections, and clean design.',
        image: '/photos/Nike_preview.png',
        category: 'Clones',
        tags: ['HTML', 'CSS'],
        github: 'https://github.com/Prajapati-Krishna18/Clones_Project/tree/main/Nike_clone', // TODO: Add GitHub link
        live: 'https://clone-nike-ui.vercel.app/', // TODO: Add live link
        youtubeDemo: '', // TODO: Add YouTube demo
        featured: false,
    },
    {
        title: 'Nebula Form – Advanced Validation System',
        description: 'A high-performance form system built with React, Formik, and Yup, featuring advanced schema-based validation, responsive design, and a clean modern UI.',
        image: "/photos/form_preview.png",
        category: 'Frontend',
        tags: ['React', 'Formik', 'Yup', 'Tailwind CSS'],
        github: 'https://github.com/Prajapati-Krishna18/professional_form/tree/main', // TODO: Add GitHub link
        live: '', // TODO: Add live link
        youtubeDemo: '', // TODO: Add YouTube demo
        featured: false,
    },
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = projects.filter(
        project => activeCategory === 'All' || project.category === activeCategory
    );

    return (
        <section id="projects" className="section-spacing gradient-section">
            <div className="content-container">
                <SectionHeading
                    title="My Projects"
                    subtitle="Some of the projects I've worked on"
                />

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${activeCategory === cat.id
                                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                                : 'glass text-gray-400 hover:text-gray-200'
                                }`}
                        >
                            <cat.icon className="w-4 h-4" />
                            {cat.name}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <Card className="h-full flex flex-col card-shine">
                                    {/* Project Image */}
                                    <div className="aspect-video rounded-lg overflow-hidden mb-5 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <FiFolder className="w-12 h-12 text-primary-400/50" />
                                        )}
                                    </div>

                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.featured && (
                                            <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white">
                                                Featured
                                            </span>
                                        )}
                                        <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-400 border border-white/10">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-200 mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-gray-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                                            >
                                                <FiGithub className="w-4 h-4" />
                                                Code
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                                            >
                                                <FiExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                        )}
                                        {project.youtubeDemo && (
                                            <a
                                                href={project.youtubeDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors"
                                            >
                                                <FiYoutube className="w-4 h-4" />
                                                Demo
                                            </a>
                                        )}
                                        {project.apiDocs && (
                                            <a
                                                href={project.apiDocs}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                                            >
                                                <FiBook className="w-4 h-4" />
                                                API Docs
                                            </a>
                                        )}
                                        {project.figmaLink && (
                                            <a
                                                href={project.figmaLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                                            >
                                                <FiFigma className="w-4 h-4" />
                                                Design
                                            </a>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
