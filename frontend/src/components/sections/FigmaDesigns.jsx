import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiFigma } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const designCategories = ['All', 'Web Design', 'Mobile Design', 'UI Kit', 'Dashboard'];

const figmaDesigns = [
    {
        id: 1,
        title: 'Portfolio Website Design',
        category: 'Web Design',
        description: 'Clean, modern portfolio layout with dark mode aesthetics, gradient accents, and smooth section transitions.',
        figmaLink: '#', // TODO: Replace with your actual Figma link
        tags: ['Portfolio', 'Dark Mode', 'Responsive'],
        color: 'from-indigo-500 to-purple-500',
    },
    {
        id: 2,
        title: 'LifeLens Dashboard UI',
        category: 'Dashboard',
        description: 'AI-Powered Wellness & Climate Intelligence dashboard with data visualization, charts, and user-friendly analytics interface.',
        figmaLink: '#', // TODO: Replace with your actual Figma link
        tags: ['Dashboard', 'AI', 'Analytics'],
        color: 'from-cyan-500 to-blue-500',
    },
    {
        id: 3,
        title: 'E-Commerce App Concept',
        category: 'Mobile Design',
        description: 'Modern e-commerce mobile app concept with product cards, cart flow, and checkout experience.',
        figmaLink: '#', // TODO: Replace with your actual Figma link
        tags: ['E-Commerce', 'Mobile', 'UI/UX'],
        color: 'from-pink-500 to-rose-500',
    },
    {
        id: 4,
        title: 'Component Library',
        category: 'UI Kit',
        description: 'Reusable UI component kit with buttons, inputs, cards, modals, and design tokens for consistent theming.',
        figmaLink: '#', // TODO: Replace with your actual Figma link
        tags: ['Components', 'Design System', 'Tokens'],
        color: 'from-emerald-500 to-teal-500',
    },
];

export default function FigmaDesigns() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredDesigns = figmaDesigns.filter(
        (design) => activeCategory === 'All' || design.category === activeCategory
    );

    return (
        <section id="figma-designs" className="section-spacing">
            <div className="content-container">
                <SectionHeading
                    title="Figma Designs"
                    subtitle="UI/UX design concepts and prototypes created in Figma"
                />

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {designCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                                activeCategory === category
                                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                                    : 'glass text-gray-400 hover:text-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Designs Grid */}
                <motion.div layout className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {filteredDesigns.map((design, index) => (
                            <motion.div
                                key={design.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <Card className="h-full flex flex-col card-shine">
                                    {/* Design Preview Placeholder */}
                                    <div className={`aspect-[16/10] rounded-lg overflow-hidden mb-5 bg-gradient-to-br ${design.color} flex items-center justify-center relative group`}>
                                        <div className="absolute inset-0 bg-black/20" />
                                        <div className="relative z-10 text-center">
                                            <FiFigma className="w-10 h-10 text-white/80 mx-auto mb-2" />
                                            <p className="text-white/60 text-sm font-medium">Figma Design</p>
                                        </div>
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-white text-sm font-medium flex items-center gap-2">
                                                <FiExternalLink className="w-4 h-4" />
                                                Open in Figma
                                            </span>
                                        </div>
                                    </div>

                                    {/* Category badge */}
                                    <span className="inline-flex self-start px-3 py-1 text-xs font-medium rounded-full bg-primary-500/15 text-primary-400 mb-3">
                                        {design.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-200 mb-2">
                                        {design.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm mb-4 flex-1">
                                        {design.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {design.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-gray-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    <div className="pt-4 border-t border-white/5">
                                        <a
                                            href={design.figmaLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                                        >
                                            <FiFigma className="w-4 h-4" />
                                            View in Figma
                                            <FiExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Note for user */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 text-sm mt-8"
                >
                    💡 More designs coming soon — check back for updates!
                </motion.p>
            </div>
        </section>
    );
}
