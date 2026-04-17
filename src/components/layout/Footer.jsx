import { FiGithub, FiLinkedin, FiTwitter, FiYoutube, FiHeart } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
    { icon: SiLeetcode, href: 'https://leetcode.com/u/krishna_prajapati', label: 'LeetCode' }, // TODO: Update URL
    { icon: FiGithub, href: 'https://github.com/Prajapati-Krishna18', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/krishna-prajapati-45ba713ab/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/KrishnaPra54873', label: 'Twitter' },
    { icon: FiYoutube, href: 'https://www.youtube.com/@krishna_cg18', label: 'YouTube' }, // TODO: Update URL
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 py-8">
            <div className="content-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>© {currentYear} Made with</span>
                        <FiHeart className="w-4 h-4 text-pink-500" />
                        <span>by Krishna Prajapati</span>
                    </div>

                    {/* Social Links — ALL 5 */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label={social.label}
                                title={social.label}
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}