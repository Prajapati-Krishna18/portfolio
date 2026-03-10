import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { FiCode, FiDatabase, FiLayers, FiSmartphone } from 'react-icons/fi';

const skills = [
    'JavaScript','React','Node.js','Tailwind CSS','MongoDB', 'Git' , 'C++',
    'Postman' , 'Netlify' , 'Render'
];

const stats = [
    { value: '15+', label: 'Projects Completed' },
    { value: '1+', label: 'Years Experience' },
    { value: '10+', label: 'Happy Clients' },
    { value: '10+', label: 'Technologies' },
];

const services = [
    { icon: FiCode, title: 'Frontend Dev', description: 'React, Vue, Next.js apps' },
    { icon: FiDatabase, title: 'Backend Dev', description: 'APIs, databases, servers' },
    { icon: FiLayers, title: 'Full Stack', description: 'End-to-end solutions' },
    { icon: FiSmartphone, title: 'Responsive', description: 'Mobile-first design' },
];

export default function About() {
    return (
        <section id="about" className="section-spacing">
            <div className="content-container">
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know me better"
                />

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-gray-200">
                            A passionate developer who loves building things for the web
                        </h3>

                        <div className="space-y-4 text-gray-400 mb-8">
                            <p>
                                I&apos;m a full-stack developer based in Gandhinagar (Gujarat), with over 1 years of experience
                                creating digital experiences. I specialize in building (and occasionally designing)
                                exceptional websites, applications, and everything in between.
                            </p>
                            <p>
                                My journey in web development started when I discovered the magic of turning ideas
                                into interactive experiences. Since then, I&apos;ve had the privilege of working with
                                startups, agencies, and established companies.
                            </p>
                            <p>
                                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                                open-source projects, or enjoying a good book with a cup of coffee.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span key={skill} className="skill-chip">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <Card key={service.title} delay={index * 0.1}>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-200 mb-1">{service.title}</h4>
                                        <p className="text-sm text-gray-400">{service.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 lg:mt-24"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}