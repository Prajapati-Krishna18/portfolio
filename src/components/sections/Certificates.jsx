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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-full">
                    {certificates.map((cert, index) => (
                        <div key={cert.title} className="w-full max-w-full">
                            <Card 
                                delay={index * 0.05} 
                                className="h-full flex flex-col relative w-full overflow-hidden"
                            >
                                {/* Badge (Absolute Positioned) */}
                                <div className="absolute top-6 right-6 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg z-10">
                                    <FiAward className="w-5 h-5 text-white" />
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-3xl mb-4 relative z-10">
                                    {cert.icon}
                                </div>

                                {/* Title & Issuer */}
                                <h3 className="text-lg font-bold text-gray-200 mb-2 pr-12 relative z-10">
                                    {cert.title}
                                </h3>
                                <p className="text-primary-400 font-medium mb-3 relative z-10">
                                    {cert.issuer}
                                </p>

                                {/* Date & ID */}
                                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4 relative z-10">
                                    <FiCalendar className="w-4 h-4 flex-shrink-0" />
                                    <span>{cert.date}</span>
                                    <span className="text-gray-600 hidden sm:inline">•</span>
                                    <span className="truncate w-full sm:w-auto block mt-1 sm:mt-0">{cert.credentialId}</span>
                                </div>

                                {/* View Link */}
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors pt-4 border-t border-white/5 break-all sm:break-normal w-full relative z-10"
                                >
                                    <FiExternalLink className="w-4 h-4 flex-shrink-0" />
                                    <span className="truncate">View Credential</span>
                                </a>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
