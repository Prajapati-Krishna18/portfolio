import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiEye } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import ResumeViewer from '../ui/ResumeViewer';

const experience = [
    {
        title: 'Hack.X — HackTheSpring',
        location: 'Government Engineering College , Gandhinagar',
        period: 'Feb 2026 - Present',
        description: 'Collaborated with a team to design and build a working prototype.Presented the project to judges and received feedback.',
    },
    {
        title: 'ElectroSphere 2K26',
        location: 'Swaminarayan University , Kalol',
        period: 'Jan 2026',
        description: 'Achieved 2nd place in the Software Edition of ElectroSphere 2K26, a technical competition organized by the TechX Club at Swaminarayan University.',
    },
    {
        title: 'Dev Heat Hackathon – Spring Fiesta',
        location: 'IIIT SURAT',
        period: 'Feb 2026',
        description: 'Participated in the Dev Heat Hackathon during Spring Fiesta organized by IIIT Surat, where I collaborated with other participants to explore innovative ideas and develop technical solutions.',
    },
];

const education = [
    {
        title: 'Bachelor of Computer Engineering',
        company: 'Swaminarayan University',
        location: 'Gandhinagar, Gujarat',
        period: '2025 - 2029',
        description: 'Focused on software engineering, algorithms, and web technologies. Graduated with honors.',
    },
];

function TimelineItem({ item, index, isLast }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8"
        >
            {/* Timeline Line */}
            {!isLast && <div className="timeline-line" />}

            {/* Timeline Dot */}
            <div className="timeline-dot" />

            {/* Content */}
            <div className="glass-card p-6 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h4 className="text-lg font-semibold text-gray-200">
                        {item.title}
                    </h4>
                    <span className="px-2.5 py-1 text-xs rounded-full bg-primary-500/20 text-primary-400">
                        {item.period}
                    </span>
                </div>

                <p className="text-primary-400 font-medium mb-2">
                    {item.company} • {item.location}
                </p>

                <p className="text-gray-400 text-sm">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Resume() {
    const [showViewer, setShowViewer] = useState(false);

    return (
        <>
            <section id="resume" className="section-spacing">
                <div className="content-container">
                    <SectionHeading
                        title="Resume"
                        subtitle="My professional journey and education"
                    />

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Experience */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 mb-8"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                    <FiBriefcase className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-200">Technical Experience</h3>
                            </motion.div>

                            <div>
                                {experience.map((item, index) => (
                                    <TimelineItem
                                        key={item.title}
                                        item={item}
                                        index={index}
                                        isLast={index === experience.length - 1}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 mb-8"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                    <FiBook className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-200">Education</h3>
                            </motion.div>

                            <div>
                                {education.map((item, index) => (
                                    <TimelineItem
                                        key={item.title}
                                        item={item}
                                        index={index}
                                        isLast={index === education.length - 1}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* View Resume Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
                        <motion.button
                            onClick={() => setShowViewer(true)}
                            className="btn-primary group relative overflow-hidden"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            aria-label="View resume"
                        >
                            <span className="inline-flex items-center gap-2.5">
                                <motion.span
                                    className="inline-block"
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    <FiEye className="w-5 h-5" />
                                </motion.span>
                                <span>View Resume</span>
                            </span>

                            {/* Shine sweep on hover */}
                            <span
                                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)',
                                    animation: 'btn-shine 1.6s ease-in-out infinite',
                                }}
                            />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Resume Viewer Modal */}
            <ResumeViewer isOpen={showViewer} onClose={() => setShowViewer(false)} />
        </>
    );
}
