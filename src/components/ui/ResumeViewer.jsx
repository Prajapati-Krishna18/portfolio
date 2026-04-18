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
                        <div className="flex-1 relative bg-white/5 overflow-hidden">
                            <iframe
                                src={`${RESUME_PATH}#toolbar=1&navpanes=0&view=FitH`}
                                title="Krishna Prajapati Resume"
                                className="w-full h-full border-0 absolute inset-0"
                                style={{ 
                                    minHeight: '400px',
                                    backgroundColor: 'white' 
                                }}
                            />
                            
                            {/* Overlay message/button for browsers that struggle with PDFs or if it takes too long */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                                <div className="pointer-events-auto p-6 text-center">
                                    <p className="text-gray-300 mb-4">Having trouble viewing the PDF?</p>
                                    <a 
                                        href={RESUME_PATH}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary inline-flex items-center gap-2"
                                    >
                                        <FiMaximize2 className="w-4 h-4" />
                                        Open Full Resume
                                    </a>
                                </div>
                            </div>

                            {/* Mobile-first fallback: On small screens, direct them to open the PDF since iFrames are tricky */}
                            <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                                <a 
                                    href={RESUME_PATH}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 rounded-full bg-primary-500 text-white font-medium shadow-lg shadow-primary-500/30 flex items-center gap-2 hover:scale-105 transition-transform"
                                >
                                    <FiMaximize2 className="w-4 h-4" />
                                    Open PDF for better view
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
