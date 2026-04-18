import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { CgSpinner } from 'react-icons/cg';

const RESUME_PATH = '/resume/resume.pdf';
const RESUME_FILENAME = 'resume.pdf';
const DEBOUNCE_MS = 2000;

/**
 * Toast notification rendered inline via AnimatePresence.
 */
function Toast({ toast, onDismiss }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const Icon = isSuccess ? FiCheck : FiAlertCircle;

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="download-toast"
          data-type={toast.type}
          onClick={onDismiss}
        >
          <Icon className="w-5 h-5 flex-shrink-0" />
          <span>{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function DownloadResumeButton({ className = '' }) {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [toast, setToast] = useState(null);
  const lastDownloadRef = useRef(0);
  const toastTimerRef = useRef(null);

  const showToast = useCallback((type, message) => {
    clearTimeout(toastTimerRef.current);
    setToast({ type, message });
    toastTimerRef.current = setTimeout(() => setToast(null), 3500);
  }, []);

  const handleDownload = useCallback(async () => {
    // Debounce: prevent rapid re-downloads
    const now = Date.now();
    if (now - lastDownloadRef.current < DEBOUNCE_MS) return;
    if (status === 'loading') return;

    lastDownloadRef.current = now;
    setStatus('loading');

    try {
      const response = await fetch(RESUME_PATH);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = RESUME_FILENAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the blob URL
      window.URL.revokeObjectURL(url);

      setStatus('success');
      showToast('success', 'Resume downloaded successfully!');

      // Track download event (Google Analytics if present)
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'download', {
          event_category: 'Resume',
          event_label: 'PDF Download',
        });
      }
    } catch (err) {
      console.error('Resume download failed:', err);
      setStatus('error');
      showToast('error', 'Download failed — please try again.');
    } finally {
      // Reset button state after a short delay
      setTimeout(() => setStatus('idle'), 1200);
    }
  }, [status, showToast]);

  const isLoading = status === 'loading';

  return (
    <div className="relative inline-flex flex-col items-center gap-3">
      <motion.button
        onClick={handleDownload}
        disabled={isLoading}
        aria-label="Download resume as PDF"
        className={`btn-primary group relative overflow-hidden ${isLoading ? 'opacity-80 cursor-wait' : ''} ${className}`}
        whileHover={isLoading ? {} : { scale: 1.04, y: -2 }}
        whileTap={isLoading ? {} : { scale: 0.97 }}
      >
        {/* Animated icon */}
        <span className="inline-flex items-center gap-2.5">
          {isLoading ? (
            <CgSpinner className="w-5 h-5 animate-spin" />
          ) : (
            <motion.span
              className="inline-block"
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FiDownload className="w-5 h-5" />
            </motion.span>
          )}

          <span>{isLoading ? 'Downloading…' : 'Download Resume'}</span>
        </span>

        {/* Shine sweep on hover */}
        <span
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)',
            animation: 'btn-shine 1.6s ease-in-out infinite',
          }}
        />
      </motion.button>

      {/* Toast */}
      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}
