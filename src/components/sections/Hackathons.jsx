import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import HackathonCard from './HackathonCard';

const hackathons = [
    {
        id: 1,
        title: 'ElectroSphere 2K26',
        organization: 'TechX Club, Swaminarayan University',
        date: 'January 2026',
        description: 'Developed SecureComm, an interactive Man-in-the-Middle (MITM) simulator. Architected a real-time network security lab to visualize and demonstrate packet interception, injection, and trust validation for educational security research.',
        outcome: '🏆 2nd Place Winner',
        techStack: ['React', 'Express.js', 'MongoDB', 'Node.js', 'AI APIs'],
        certificateImage: '/certificates/SU 2nd Place Certificate.jpeg',
        certificateLink: '/certificates/SU 2nd Place Certificate.pdf',
        githubLink: 'https://github.com/Prajapati-Krishna18/secure-Comm',
        projectImages: [
            '/certificates/SU 2nd Place Certificate.jpeg',
            '/photos/SU Team Codepulse Selfie.jpeg', // Placeholder
            '/photos/SU Team CodePulse.jpeg'   // Placeholder
        ],
    },
    {
        id: 3,
        title: 'Dev Heat Hackathon — Spring Fiesta',
        organization: 'IIIT Surat (Indian Institute of Information Technology)',
        date: 'February 2026',
        description: 'Developed an AI-powered climate and wellness platform integrating real-time insights, predictive analytics, and map-based travel intelligence within a hackathon environment.',
        outcome: 'Participant 💻',
        techStack: ['React', 'Express.js', 'MongoDB', 'REST API'],
        certificateImage: '/certificates/DevHeat Hackathon.png',
        certificateLink: '/certificates/Dev Heat IIIT SURAT certificate.pdf',
        githubLink: 'https://github.com/Prajapati-Krishna18/lifelens-ai-dashboard/tree/main',
        projectImages: [
            '/certificates/DevHeat Hackathon.png',   // Placeholder
            '/photos/IIIT SURAT Stage.jpeg',  // Placeholder
            '/photos/Lifelens.png'
        ],
    },
    {
        id: 2,
        title: "Hack.X — HackTheSpring '26",
        organization: 'Government Engineering College, Gandhinagar',
        date: 'February 2026',
        status: 'In Progress',
        description: 'Designed and built a working prototype for a real-world problem within 24 hours of intensive hacking. Focused on rapid development and effective team collaboration.',
        outcome: 'Participant 🚀',
        techStack: ['React.js', 'MediaPipe', 'JavaScript', 'Computer Vision'],
        certificateImage: '/certificates/Hack the Spring .jpeg',
        certificateLink: '/certificates/Hack the Spring .pdf',
        githubLink: 'https://github.com/Prajapati-Krishna18/theft_detection_project',
        projectImages: [
            '/certificates/Hack the Spring .jpeg',
            '/photos/Hack.X GEC Personal-1.jpeg', // Placeholder
            '/photos/Hack.X Team.jpeg',
            '/photos/GEC Team 404Found.jpeg'    // Placeholder
        ],
    },
    // {
    //     id: 4,
    //     title: 'HackCrux V2.0.0',
    //     organization: 'The LNM Institute of Information Technology',
    //     date: 'March 2026',
    //     description: 'Explored complex problem-solving across multiple tracks in a multi-state competition. Developed localized solutions with scalable architecture.',
    //     outcome: 'Participant 💻',
    //     techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    //     certificateImage: '/certificates/LNMIIT_HackCrux.png',
    //     certificateLink: '/certificates/LNMIIT_HackCrux.pdf',
    //     projectImages: [
    //         '/photos/Lifelens.png', // Placeholder
    //         '/photos/preview.png'   // Placeholder
    //     ],
    // },
];

export default function Hackathons() {
    return (
        <section id="hackathons" className="section-spacing gradient-section overflow-hidden">
            <div className="content-container">
                <SectionHeading
                    title="Hackathons"
                    subtitle="Competitions, challenges, and collaborative problem-solving"
                />



                {/* Hackathon cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {hackathons.map((hackathon, index) => (
                        <HackathonCard
                            key={hackathon.id}
                            hackathon={hackathon}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
