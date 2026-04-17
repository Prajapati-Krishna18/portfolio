import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiStar } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const achievements = [
    {
        id: 1,
        title: 'ElectroSphere 2K26 — 2nd Place',
        category: 'Competition',
        date: 'January 2026',
        description: 'Secured 2nd position in the Software Edition of ElectroSphere 2K26, a university-level technical competition organized by the TechX Club at Swaminarayan University.',
        icon: '🏆',
        proof: '/certificates/SU 2nd Place Certificate.pdf',
    },
    {
        id: 2,
        title: '4 Hackathons in 3 Months',
        category: 'Milestone',
        date: 'Jan – Mar 2026',
        description: 'Participated in 4 national-level hackathons (ElectroSphere, HackTheSpring, Dev Heat at IIIT Surat, HackCrux at LNMIIT) within a span of just 3 months.',
        icon: '🚀',
        proof: null,
    },
    {
        id: 3,
        title: 'Full Stack Project Portfolio',
        category: 'Technical',
        date: '2025 – Present',
        description: 'Built and deployed multiple full-stack web applications using the MERN stack, showcasing frontend and backend development skills.',
        icon: '💻',
        proof: null,
    },
    {
        id: 4,
        title: 'B.Tech CSE — Swaminarayan University',
        category: 'Academic',
        date: '2025 – 2029',
        description: 'Pursuing Bachelor of Computer Engineering at Swaminarayan University, Gandhinagar with a focus on software engineering and web technologies.',
        icon: '🎓',
        proof: null,
    },
    {
        id: 5,
        title: 'Open Source Contributor',
        category: 'Community',
        date: '2025 – Present',
        description: 'Actively contributing to open-source projects on GitHub, sharing code and collaborating with the developer community.',
        icon: '🌐',
        proof: 'https://github.com/Prajapati-Krishna18',
    },
    {
        id: 6,
        title: 'Self-Taught MERN Stack',
        category: 'Learning',
        date: '2025',
        description: 'Self-taught the complete MERN stack (MongoDB, Express.js, React, Node.js) through hands-on projects and online resources.',
        icon: '📚',
        proof: null,
    },
];

const categoryColors = {
    Competition: 'from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500/30',
    Milestone: 'from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-500/30',
    Technical: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30',
    Academic: 'from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30',
    Community: 'from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30',
    Learning: 'from-orange-500/20 to-amber-500/20 text-orange-400 border-orange-500/30',
};

export default function Achievements() {
    return (
        <section id="achievements" className="section-spacing gradient-section">
            <div className="content-container">
                <SectionHeading
                    title="Achievements"
                    subtitle="Milestones, awards, and recognitions along my journey"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-full">
                    {achievements.map((achievement, index) => (
                        <div key={achievement.id} className="w-full max-w-full">
                            <Card
                                delay={index * 0.08}
                                className="h-full flex flex-col relative w-full overflow-hidden"
                            >
                                {/* Top badge */}
                                <div className="absolute top-6 right-6 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg z-10">
                                    <FiStar className="w-5 h-5 text-white" />
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-3xl mb-4 relative z-10">
                                    {achievement.icon}
                                </div>

                                {/* Category badge */}
                                <span className={`inline-flex self-start px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r border mb-3 relative z-10 ${categoryColors[achievement.category] || 'from-primary-500/20 to-accent-500/20 text-primary-400 border-primary-500/30'}`}>
                                    {achievement.category}
                                </span>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-200 mb-2 pr-12 relative z-10">
                                    {achievement.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-400 mb-4 flex-1 relative z-10 leading-relaxed">
                                    {achievement.description}
                                </p>

                                {/* Date & Proof */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/5 relative z-10">
                                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                        <FiCalendar className="w-4 h-4" />
                                        <span>{achievement.date}</span>
                                    </div>

                                    {achievement.proof && (
                                        <a
                                            href={achievement.proof}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                                        >
                                            <FiExternalLink className="w-4 h-4" />
                                            Proof
                                        </a>
                                    )}
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
