import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward, FiExternalLink, FiGithub } from 'react-icons/fi';
import Slideshow from '../ui/Slideshow';

export default function HackathonCard({ hackathon, index }) {
    const isWinner = hackathon.outcome.toLowerCase().includes('winner') || 
                     hackathon.outcome.toLowerCase().includes('1st') || 
                     hackathon.outcome.toLowerCase().includes('2nd') || 
                     hackathon.outcome.toLowerCase().includes('3rd');

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group h-full"
        >
            <div className={`glass-card relative overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 ${isWinner ? 'border-primary-500/30' : 'border-white/10'}`}>
                {/* Background Glow */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-primary-500/5 group-hover:to-primary-500/10 transition-all duration-1000 opacity-0 group-hover:opacity-100 pointer-events-none" />

                {/* TOP: Project Slideshow */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-white/5">
                    <Slideshow 
                        images={hackathon.projectImages} 
                        className="h-full w-full"
                    />
                    {/* Winner Badge on Image */}
                    {isWinner && (
                        <div className="absolute top-3 left-3 z-20">
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-yellow-500/90 text-black backdrop-blur-sm border border-yellow-400">
                                🏆 Winner
                            </span>
                        </div>
                    )}
                </div>

                {/* CONTENT AREA */}
                <div className="p-5 md:p-6 flex flex-col flex-1 relative z-10">
                    {/* Metadata Row */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                            isWinner 
                                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                                : 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                        }`}>
                            {hackathon.outcome}
                        </span>
                        <span className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium">
                            <FiCalendar className="w-3 h-3 text-primary-400" />
                            {hackathon.date}
                        </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-1">
                        {hackathon.title}
                    </h3>
                    
                    <div className="flex items-start gap-2 mb-3 text-xs text-gray-400 font-medium leading-tight">
                        <FiMapPin className="w-3.5 h-3.5 mt-0.5 text-primary-500/60 shrink-0" />
                        <span className="line-clamp-2">{hackathon.organization}</span>
                    </div>

                    {/* Status Notice for projects in progress */}
                    {hackathon.status && (
                        <div className="flex items-center gap-2 mb-3 px-2 py-1 rounded bg-accent-500/10 border border-accent-500/20 text-[9px] font-bold text-accent-400 w-fit uppercase tracking-wider italic">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-500"></span>
                            </span>
                            {hackathon.status}
                        </div>
                    )}

                    <p className="text-xs text-gray-400 leading-relaxed mb-6 line-clamp-3">
                        {hackathon.description}
                    </p>

                    <div className="mt-auto pt-5 border-t border-white/5 space-y-4">
                        {/* Tech Stack */}
                        <div>
                            <div className="flex flex-wrap gap-1.5">
                                {hackathon.techStack.map((tech) => (
                                    <span 
                                        key={tech} 
                                        className="px-2 py-0.5 text-[9px] rounded bg-white/5 text-gray-400 border border-white/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions Row */}
                        <div className="flex items-center justify-between gap-4">
                            <motion.a
                                href={hackathon.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 group/btn px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-[10px] font-bold text-gray-400 hover:text-white"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiGithub className="w-3.5 h-3.5" />
                                VIEW CODE
                                <FiExternalLink className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                            </motion.a>

                            <div className="h-px flex-1 bg-white/10" />
                            
                            <motion.a
                                href={hackathon.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 group/btn px-3 py-1.5 rounded-lg bg-primary-500/10 border border-primary-500/20 hover:bg-primary-500/20 hover:border-primary-500/40 transition-all text-[10px] font-bold text-primary-400"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiAward className="w-3.5 h-3.5" />
                                VIEW PROOF
                                <FiExternalLink className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
