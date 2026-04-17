import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiLinkedin, FiTwitter, FiYoutube, FiSun, FiMoon } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { useTheme } from '../../context/ThemeContext';

const socialLinks = [
  { icon: SiLeetcode, href: 'https://leetcode.com/u/krishna_prajapati', label: 'LeetCode' }, // TODO: Update URL
  { icon: FiGithub, href: 'https://github.com/Prajapati-Krishna18', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/krishna-prajapati-45ba713ab/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://x.com/KrishnaPra54873', label: 'Twitter' },
  { icon: FiYoutube, href: 'https://youtube.com/@KrishnaPrajapati', label: 'YouTube' }, // TODO: Update URL
];

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: {
    x: '100%',
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3 },
  }),
};

export default function MobileDrawer({
  isOpen,
  onClose,
  navItems,
  activeSection,
  onNavClick,
}) {
  const { isDark, toggleTheme } = useTheme();

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.nav
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 z-[999] w-[280px] max-w-[85vw]
              flex flex-col
              border-l border-white/8"
            style={{
              background: isDark
                ? 'rgba(15, 15, 35, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/8">
              <span className="text-lg font-bold text-gradient">KP</span>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center
                  navbar-toggle-btn transition-all"
                aria-label="Close menu"
              >
                <FiX className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={(e) => {
                      onNavClick(e, item.href);
                      onClose();
                    }}
                    className={`
                      flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium
                      transition-all duration-200
                      ${
                        activeSection === item.href.substring(1)
                          ? 'bg-gradient-to-r from-primary-500/15 to-primary-500/5 text-primary-400 border border-primary-500/20'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                      }
                    `}
                  >
                    {/* Active indicator */}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="w-1 h-5 rounded-full bg-gradient-to-b from-primary-500 to-accent-500"
                      />
                    )}
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer — social links + theme toggle */}
            <div className="p-6 border-t border-white/8 space-y-5">
              {/* Theme Toggle */}
              <motion.button
                custom={navItems.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onClick={toggleTheme}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl
                  navbar-toggle-btn transition-all font-medium text-sm"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <>
                    <FiSun className="w-5 h-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <FiMoon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </motion.button>

              {/* Social links */}
              <motion.div
                custom={navItems.length + 1}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-center gap-3"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
