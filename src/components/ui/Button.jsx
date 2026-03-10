import { motion } from 'framer-motion';

const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
};

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    icon: Icon,
    ...props
}) {
    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`${variants[variant]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {Icon && <Icon className="w-5 h-5" />}
            {children}
        </Component>
    );
}
