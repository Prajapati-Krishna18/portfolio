import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const certificates = [
    {
        title: 'Hack.X — HackTheSpring \'26',
        issuer: 'Government Engineering College, Gandhinagar',
        date: 'Feb 2026',
        credentialId: 'Participation',
        link: '/certificates/Hack the Spring .pdf',
        icon: '🚀',
    },
    {
        title: 'ElectroSphere 2K26 — 2nd Place',
        issuer: 'TechX Club, Swaminarayan University',
        date: 'Jan 2026',
        credentialId: 'Software Edition',
        link: '/certificates/SU 2nd Place Certificate.pdf',
        icon: '🏆',
    },
    {
        title: 'Dev Heat Hackathon — Spring Fiesta',
        issuer: 'IIIT Surat (Indian Institute of Information Technology)',
        date: 'Feb 2026',
        credentialId: 'Participation',
        link: '/certificates/Dev Heat IIIT SURAT certificate.pdf',
        icon: '💻',
    },
    {
        title: 'HackCrux V2.0.0 — Participant',
        issuer: 'HackCrux (The LNM Institute of Information Technology)',
        date: 'Mar 2026',
        credentialId: 'March 14th-15th, 2026 Participation',
        link: '/certificates/LNMIIT_HackCrux.pdf',
        icon: '💻',
    }
];

export default function Certificates() {
    return (
        <section id="certificates" className="section-spacing gradient-section">
            <div className="content-container">
                <SectionHeading
                    title="Certifications"
                    subtitle="Professional credentials and achievements"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="h-full flex flex-col">
                                {/* Icon */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-3xl">
                                        {cert.icon}
                                    </div>
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                        <FiAward className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Title & Issuer */}
                                <h3 className="text-lg font-bold text-gray-200 mb-2">
                                    {cert.title}
                                </h3>
                                <p className="text-primary-400 font-medium mb-3">
                                    {cert.issuer}
                                </p>

                                {/* Date & ID */}
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                    <FiCalendar className="w-4 h-4" />
                                    <span>{cert.date}</span>
                                    <span className="text-gray-600">•</span>
                                    <span className="truncate">{cert.credentialId}</span>
                                </div>

                                {/* View Link */}
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors pt-4 border-t border-white/5"
                                >
                                    <FiExternalLink className="w-4 h-4" />
                                    View Credential
                                </a>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
