import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, centered = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''}`}
        >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-gradient">{title}</span>
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
