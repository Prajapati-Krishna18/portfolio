import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import MobileDrawer from './MobileDrawer';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Check which section is in view
            const sections = navItems.map(item => item.href.substring(1));
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'py-3' : 'py-4'} transition-all duration-300`}>
                <div className="content-container">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            onClick={(e) => handleNavClick(e, '#home')}
                            className="text-xl font-bold text-gradient"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            KP
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                                >
                                    {item.label}
                                </a>
                            ))}

                            {/* Separator */}
                            <div className="w-px h-6 bg-white/10 mx-3" />

                            {/* Theme Toggle */}
                            <motion.button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg navbar-toggle-btn transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Toggle theme"
                            >
                                {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-3 md:hidden">
                            <motion.button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg navbar-toggle-btn"
                                whileTap={{ scale: 0.95 }}
                                aria-label="Toggle theme"
                            >
                                {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                            </motion.button>

                            <motion.button
                                onClick={() => setIsOpen(true)}
                                className="p-2 rounded-lg navbar-toggle-btn"
                                whileTap={{ scale: 0.95 }}
                                aria-label="Open navigation menu"
                            >
                                <FiMenu className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <MobileDrawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                navItems={navItems}
                activeSection={activeSection}
                onNavClick={handleNavClick}
            />
        </>
    );
}
