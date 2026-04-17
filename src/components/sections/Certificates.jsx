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
        image: '/certificates/Hack the Spring .jpeg',
    },
    {
        title: 'ElectroSphere 2K26 — 2nd Place',
        issuer: 'TechX Club, Swaminarayan University',
        date: 'Jan 2026',
        credentialId: 'Software Edition',
        link: '/certificates/SU 2nd Place Certificate.pdf',
        image: '/certificates/SU 2nd Place Certificate.jpeg',
    },
    {
        title: 'Dev Heat Hackathon — Spring Fiesta',
        issuer: 'IIIT Surat (Indian Institute of Information Technology)',
        date: 'Feb 2026',
        credentialId: 'Participation',
        link: '/certificates/Dev Heat IIIT SURAT certificate.pdf',
        image: '/certificates/DevHeat Hackathon.png',
    },
    {
        title: 'HackCrux V2.0.0 — Participant',
        issuer: 'HackCrux (The LNM Institute of Information Technology)',
        date: 'Mar 2026',
        credentialId: 'March 14th-15th, 2026 Participation',
        link: '/certificates/LNMIIT_HackCrux.pdf',
        image: '/certificates/LNMIIT_HackCrux.png',
    },
    {
        title: 'Odoo x Adani — Certificate of Achievement',
        issuer: 'Odoo & Adani Group',
        date: '2026',
        credentialId: 'Participation & Completion',
        link: '/certificates/Odoo x Adani certificate.pdf',
        image: '/certificates/Odoo x Adani.png',
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
                                className="h-full flex flex-col relative w-full overflow-hidden p-0"
                            >
                                {/* Image Preview */}
                                <div className="aspect-[4/3] w-full bg-dark-900 relative group overflow-hidden border-b border-white/5">
                                    {cert.image ? (
                                        <img 
                                            src={cert.image} 
                                            alt={cert.title} 
                                            className="w-full h-full object-contain p-2 bg-black/40 transition-transform duration-500 group-hover:scale-105"
                                            onError={(e) => {
                                                e.target.onerror = null; 
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    {/* Fallback if image fails to load */}
                                    <div className="absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-primary-500/10 to-accent-500/10" style={{ display: !cert.image ? 'flex' : 'none' }}>
                                        <FiAward className="w-10 h-10 text-primary-400 mb-2 opacity-50" />
                                        <p className="text-xs text-gray-500">Image missing (Add .png version)</p>
                                    </div>
                                    
                                    {/* View Overlay on Hover */}
                                    <a 
                                        href={cert.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                                    >
                                        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm font-medium border border-white/20">
                                            <FiExternalLink className="w-4 h-4" />
                                            View PDF
                                        </span>
                                    </a>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    {/* Title & Issuer */}
                                    <h3 className="text-lg font-bold text-gray-200 mb-2">
                                        {cert.title}
                                    </h3>
                                    <p className="text-primary-400 font-medium mb-3 text-sm">
                                        {cert.issuer}
                                    </p>

                                    {/* Date & ID */}
                                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4 mt-auto">
                                        <FiCalendar className="w-3.5 h-3.5 flex-shrink-0" />
                                        <span>{cert.date}</span>
                                        <span className="text-gray-600 hidden sm:inline">•</span>
                                        <span className="truncate w-full sm:w-auto block mt-1 sm:mt-0">{cert.credentialId}</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
