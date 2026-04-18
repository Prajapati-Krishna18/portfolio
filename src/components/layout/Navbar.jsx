import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import MobileDrawer from './MobileDrawer';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hackathons', href: '#hackathons' },
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
    const isNavClickRef = useRef(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-80px 0px -40% 0px',
            threshold: 0,
        };

        const handleIntersection = (entries) => {
            const intersectingEntry = entries.find(entry => entry.isIntersecting);
            
            if (intersectingEntry && !isNavClickRef.current) {
                const sectionId = intersectingEntry.target.id;
                setActiveSection(sectionId);
                
                const newHash = `#${sectionId}`;
                if (window.location.hash !== newHash) {
                    window.history.replaceState(null, '', newHash === '#home' ? window.location.pathname : newHash);
                }
            }
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        const sections = navItems.map(item => item.href.substring(1));
        sections.forEach(section => {
            const el = document.getElementById(section);
            if (el) observer.observe(el);
        });

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            // Reset nav click flag when scroll is minimal or after some time
            // Better: reset it when smooth scroll finish is detected (could use a timer)
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const sectionId = href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
            isNavClickRef.current = true;
            setActiveSection(sectionId);
            window.history.pushState(null, '', href === '#home' ? window.location.pathname : href);
            
            element.scrollIntoView({ behavior: 'smooth' });

            // Reset the flag after smooth scroll is likely done
            setTimeout(() => {
                isNavClickRef.current = false;
            }, 1000);
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
