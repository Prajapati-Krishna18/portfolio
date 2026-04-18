import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiMaximize2 } from 'react-icons/fi';

const RESUME_PATH = '/resume/KRISHNA_PRAJAPATI_Resume.pdf';

export default function ResumeViewer({ isOpen, onClose }) {
    // Close on Escape
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') onClose();
    }, [onClose]);

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
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 30 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed inset-4 md:inset-8 lg:inset-12 z-[1001] flex flex-col rounded-2xl overflow-hidden"
                        style={{
                            background: 'rgba(15, 15, 35, 0.98)',
                            backdropFilter: 'blur(24px)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Resume Viewer"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                            <h3 className="text-lg font-bold text-gray-200">📄 Resume — Krishna Prajapati</h3>
                            <div className="flex items-center gap-2">
                                {/* Open in new tab */}
                                <a
                                    href={RESUME_PATH}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/10 transition-all"
                                    aria-label="Open in new tab"
                                    title="Open in new tab"
                                >
                                    <FiMaximize2 className="w-5 h-5" />
                                </a>

                                {/* Download */}
                                <a
                                    href={RESUME_PATH}
                                    download="KRISHNA_PRAJAPATI_Resume.pdf"
                                    className="p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/10 transition-all"
                                    aria-label="Download resume"
                                    title="Download PDF"
                                >
                                    <FiDownload className="w-5 h-5" />
                                </a>

                                {/* Close */}
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-white/10 transition-all"
                                    aria-label="Close resume viewer"
                                >
                                    <FiX className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 relative">
                            <iframe
                                src={`${RESUME_PATH}#toolbar=1&navpanes=0`}
                                title="Krishna Prajapati Resume"
                                className="w-full h-full border-0"
                                style={{ minHeight: '400px' }}
                            />

                            {/* Fallback message for browsers that can't render PDF */}
                            <noscript>
                                <div className="absolute inset-0 flex items-center justify-center bg-dark-900">
                                    <p className="text-gray-400">
                                        Unable to display PDF.{' '}
                                        <a href={RESUME_PATH} className="text-primary-400 underline">Download here</a>.
                                    </p>
                                </div>
                            </noscript>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
