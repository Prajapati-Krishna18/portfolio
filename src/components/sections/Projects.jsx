import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const categories = ['All', 'Web App', 'Mobile', 'Backend', 'UI/UX'];

const projects = [
    {
        title: 'LifeLens – AI-Powered Wellness & Climate Intelligence Platform',
        description: 'An intelligent platform that analyzes daily habits such as sleep, mood, and movement to provide personalized wellness insights while tracking environmental impact.',
        image: "/photos/Lifelens.png",
        category: 'Web App',
        tags: ['React', 'Node.js', 'MongoDB', 'AI APIs'],
        github: 'https://github.com/Prajapati-Krishna18/lifelens-ai-dashboard/tree/main',
        live: 'https://lifelens-ai-dashboard.vercel.app/',
        featured: true,
    }
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
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full font-medium transition-all ${activeCategory === category
                                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                                : 'glass text-gray-400 hover:text-gray-200'
                                }`}
                        >
                            {category}
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
                                    {/* Project Image Placeholder */}
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

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <span className="inline-flex self-start px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white mb-3">
                                            Featured
                                        </span>
                                    )}

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
                                    <div className="flex gap-3 pt-4 border-t border-white/5">
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
