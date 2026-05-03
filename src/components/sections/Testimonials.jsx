import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiSend, FiCornerDownRight, FiUser, FiClock, FiMail, FiAlertCircle, FiLoader } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const DEFAULT_TESTIMONIALS = [
    // {
    //     _id: 'default-1',
    //     name: 'Alex Johnson',
    //     message: 'Krishna is an exceptional developer. His attention to detail and ability to solve complex problems is truly impressive.',
    //     createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    //     reply: 'Thank you Alex! It was a pleasure working with you on that project.',
    //     replyDate: new Date(Date.now() - 86400000).toISOString(),
    // },
    {
        _id: 'default-2',
        name: 'Yug Patel',
        message: 'The portfolio looks amazing. The animations are smooth and the design is very modern. Great job!',
        createdAt: new Date(Date.now() - 604800000).toISOString(), // 7 days ago
    }
];

// ─── Helpers ────────────────────────────────────────────
function formatTime(date) {
  const d = new Date(date);
  const now = new Date();
  const diffMs = now - d;
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffMin < 1) return 'Just now';
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function AvatarBubble({ name }) {
  const initial = (name || 'A')[0].toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
      <span className="text-sm font-bold text-white">{initial}</span>
    </div>
  );
}

// ─── Empty State (preserved from original) ──────────────
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto"
    >
      <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-500/5 rounded-full blur-3xl" />

        {/* Icon */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 mb-6"
        >
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center border border-white/10">
            <FiMessageCircle className="w-10 h-10 text-primary-400" />
          </div>
        </motion.div>

        {/* Text */}
        <h3 className="relative z-10 text-xl md:text-2xl font-bold text-gray-200 mb-3">
          Testimonials Coming Soon
        </h3>
        <p className="relative z-10 text-gray-400 max-w-sm mx-auto leading-relaxed">
          I&apos;m currently collecting feedback from collaborators and clients.
          Be the first to share your experience!
        </p>

        {/* Decorative dots */}
        <div className="relative z-10 flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Single Testimonial Card ────────────────────────────
function TestimonialCard({ testimonial, index, onReplySubmit }) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replying, setReplying] = useState(false);

  const handleReply = async (e) => {
    e.preventDefault();
    if (!replyText.trim() || replying) return;
    setReplying(true);
    await onReplySubmit(testimonial._id, replyText.trim());
    setReplyText('');
    setShowReplyForm(false);
    setReplying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ delay: index * 0.08, duration: 0.4, type: 'spring', stiffness: 200, damping: 25 }}
      className="group"
    >
      <div className="glass-card p-5 relative overflow-hidden">
        {/* Decorative quote */}
        <div className="absolute -top-1 -left-1 text-5xl font-serif text-primary-500/8 leading-none select-none pointer-events-none">
          &ldquo;
        </div>

        {/* Header — avatar + name + time */}
        <div className="flex items-center gap-3 mb-3 relative z-10">
          <AvatarBubble name={testimonial.name} />
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-200 text-sm truncate">
              {testimonial.name || 'Anonymous'}
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <FiClock className="w-3 h-3" />
              <span>{formatTime(testimonial.createdAt)}</span>
            </div>
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-300 text-sm leading-relaxed mb-3 relative z-10">
          {testimonial.message}
        </p>

        {/* Reply button (only if no reply yet) */}
        {!testimonial.reply && (
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="text-xs text-gray-500 hover:text-primary-400 transition-colors flex items-center gap-1.5 relative z-10"
            aria-label="Reply to this testimonial"
          >
            <FiCornerDownRight className="w-3 h-3" />
            {showReplyForm ? 'Cancel' : 'Reply'}
          </button>
        )}

        {/* Existing reply from admin */}
        <AnimatePresence>
          {testimonial.reply && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 pl-4 border-l-2 border-primary-500/20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/3 rounded-lg p-3"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <span className="text-[0.6rem] font-bold text-white">KP</span>
                  </div>
                  <span className="text-xs font-semibold text-primary-400">Krishna</span>
                  {testimonial.replyDate && (
                    <span className="text-[0.65rem] text-gray-500">{formatTime(testimonial.replyDate)}</span>
                  )}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{testimonial.reply}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reply input form */}
        <AnimatePresence>
          {showReplyForm && (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              onSubmit={handleReply}
              className="mt-3 flex gap-2 overflow-hidden"
            >
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="form-input !py-2 !px-3 !text-sm flex-1 !rounded-lg"
                autoFocus
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!replyText.trim() || replying}
                className="px-3 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm
                  disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Submit reply"
              >
                {replying ? <FiLoader className="w-4 h-4 animate-spin" /> : <FiSend className="w-4 h-4" />}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Feedback Form (with Email field) ───────────────────
function FeedbackForm({ onSubmit, isSubmitting }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (email && !validateEmail(email)) newErrors.email = 'Please enter a valid email';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!message.trim()) newErrors.message = 'Message is required';
    if (message.trim().length > 0 && message.trim().length < 5) newErrors.message = 'Message must be at least 5 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    const success = await onSubmit({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    if (success) {
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="glass-card p-6 md:p-8 relative overflow-hidden h-full">
        {/* Background decoration */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-accent-500/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <FiMessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-200">Share Feedback</h3>
              <p className="text-xs text-gray-500">Your email is stored securely &amp; never displayed</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Name */}
            <div>
              <label htmlFor="feedback-name" className="form-label flex items-center gap-1.5">
                <FiUser className="w-3.5 h-3.5" />
                Name <span className="text-red-400">*</span>
              </label>
              <motion.input
                id="feedback-name"
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); if (errors.name) setErrors(prev => ({ ...prev, name: '' })); }}
                placeholder="Your name"
                className={`form-input ${errors.name ? '!border-red-500/50' : ''}`}
                whileFocus={{ scale: 1.01 }}
                maxLength={100}
                required
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-400 mt-1 flex items-center gap-1"
                >
                  <FiAlertCircle className="w-3 h-3" />
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* Email (REQUIRED) */}
            <div>
              <label htmlFor="feedback-email" className="form-label flex items-center gap-1.5">
                <FiMail className="w-3.5 h-3.5" />
                Email <span className="text-red-400">*</span>
              </label>
              <motion.input
                id="feedback-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors(prev => ({ ...prev, email: '' })); }}
                placeholder="your@email.com"
                className={`form-input ${errors.email ? '!border-red-500/50' : ''}`}
                whileFocus={{ scale: 1.01 }}
                required
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-400 mt-1 flex items-center gap-1"
                >
                  <FiAlertCircle className="w-3 h-3" />
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="feedback-message" className="form-label flex items-center gap-1.5">
                <FiMessageCircle className="w-3.5 h-3.5" />
                Message <span className="text-red-400">*</span>
              </label>
              <motion.textarea
                id="feedback-message"
                value={message}
                onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors(prev => ({ ...prev, message: '' })); }}
                placeholder="Share your experience working with me..."
                rows={4}
                className={`form-input resize-none ${errors.message ? '!border-red-500/50' : ''}`}
                whileFocus={{ scale: 1.01 }}
                required
                maxLength={2000}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-400 mt-1 flex items-center gap-1"
                >
                  <FiAlertCircle className="w-3 h-3" />
                  {errors.message}
                </motion.p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center gap-2"
                  >
                    ✓ Submitted!
                  </motion.span>
                ) : isSubmitting ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <FiLoader className="w-4 h-4 animate-spin" />
                    Submitting...
                  </motion.span>
                ) : (
                  <motion.span
                    key="default"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <FiSend className="w-4 h-4" />
                    Submit Feedback
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <p className="text-[0.65rem] text-gray-600 text-center mt-2">
              🔒 Your email is securely stored and will never be shown publicly.
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Testimonials Section ──────────────────────────
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Fetch testimonials from API on mount
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await fetch(`${API_URL}/feedback`);
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setTestimonials(json.data);
        } else {
          // Fallback to defaults if no data returned
          setTestimonials(DEFAULT_TESTIMONIALS);
        }
      } catch (err) {
        console.warn('Failed to fetch feedback, using defaults:', err);
        setTestimonials(DEFAULT_TESTIMONIALS);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedback();
  }, []);

  // Submit new feedback to API
  const handleAddTestimonial = useCallback(async (data) => {
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        const errorMsg = json.errors ? json.errors.join(', ') : json.error || 'Submission failed';
        console.error('Feedback submission error:', errorMsg);
        setSubmitting(false);
        return false;
      }

      if (json.success && json.data) {
        // Prepend the new feedback to the list (email is already excluded by API)
        setTestimonials((prev) => [json.data, ...prev]);
      }
      setSubmitting(false);
      return true;
    } catch (err) {
      console.error('Feedback submission error:', err);
      setSubmitting(false);
      return false;
    }
  }, []);

  // Admin reply — sends PATCH to API
  const handleReplySubmit = useCallback(async (feedbackId, replyMessage) => {
    try {
      const res = await fetch(`${API_URL}/feedback/${feedbackId}/reply`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reply: replyMessage }),
      });
      const json = await res.json();

      if (json.success && json.data) {
        setTestimonials((prev) =>
          prev.map((t) => (t._id === feedbackId ? json.data : t))
        );
      }
    } catch (err) {
      console.error('Reply error:', err);
    }
  }, []);

  const hasTestimonials = testimonials.length > 0;

  return (
    <section id="testimonials" className="section-spacing">
      <div className="content-container">
        <SectionHeading
          title="What People Say"
          subtitle="Share your experience or read what others think"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* LEFT — Testimonials list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-bold text-gray-200">Feedback</h3>
              {hasTestimonials && (
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary-500/15 text-primary-400">
                  {testimonials.length}
                </span>
              )}
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-16">
                <FiLoader className="w-6 h-6 text-primary-400 animate-spin" />
              </div>
            ) : hasTestimonials ? (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                <AnimatePresence mode="popLayout">
                  {testimonials.map((t, index) => (
                    <TestimonialCard
                      key={t._id}
                      testimonial={t}
                      index={index}
                      onReplySubmit={handleReplySubmit}
                    />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <EmptyState />
            )}
          </motion.div>

          {/* RIGHT — Feedback form */}
          <div className="lg:col-span-2">
            <FeedbackForm onSubmit={handleAddTestimonial} isSubmitting={submitting} />
          </div>
        </div>
      </div>
    </section>
  );
}
