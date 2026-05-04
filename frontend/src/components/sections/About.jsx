import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import SkillsCloud from './SkillsCloud';
import { FiCode, FiDatabase, FiLayers, FiSmartphone } from 'react-icons/fi';

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

                        <div className="space-y-6 text-gray-300 mb-8 max-w-2xl text-lg leading-relaxed">
                            <p className="hover:translate-x-1 transition-transform duration-500 ease-out">
                                I&apos;m a <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-semibold">full-stack developer</span> based in Gandhinagar (Gujarat), with over 1 years of experience
                                creating <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-semibold">digital experiences</span>. I specialize in building (and occasionally designing)
                                exceptional websites, applications, and everything in between.
                            </p>
                            <p className="border-l-2 border-purple-500 pl-4 hover:translate-x-1 transition-transform duration-500 ease-out">
                                My journey in web development started when I discovered the magic of turning ideas
                                into <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-semibold">interactive experiences</span>. Since then, I&apos;ve had the privilege of working with
                                startups, agencies, and established companies.
                            </p>
                            <p className="hover:translate-x-1 transition-transform duration-500 ease-out">
                                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-semibold"> open-source projects</span>, or enjoying a good book with a cup of coffee.
                            </p>
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

                {/* Interactive Skills Cloud */}
                <SkillsCloud />
            </div>
        </section>
    );
}