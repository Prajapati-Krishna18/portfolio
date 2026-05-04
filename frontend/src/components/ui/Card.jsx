import { motion } from 'framer-motion';

const variants = {
    default: 'glass-card p-6 md:p-8',
    large: 'glass-card p-8 md:p-10 lg:p-12',
    compact: 'glass-card p-4 md:p-5',
};

export default function Card({
    children,
    variant = 'default',
    className = '',
    animate = true,
    delay = 0
}) {
    const Component = animate ? motion.div : 'div';

    const animationProps = animate ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.5, delay }
    } : {};

    return (
        <Component
            className={`${variants[variant]} ${className}`}
            {...animationProps}
        >
            {children}
        </Component>
    );
}
