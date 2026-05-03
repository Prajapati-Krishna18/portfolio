import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

const contactInfo = [
    {
        icon: FiMail,
        label: 'Email',
        value: 'krishna.prajapati.rcg@gmail.com',
        href: 'mailto:krishna.prajapati.rcg@gmail.com',
    },
    {
        icon: FiMapPin,
        label: 'Location',
        value: 'Gandhinagar, Gujarat',
        href: null,
    },
    {
        icon: FiPhone,
        label: 'Phone',
        value: '+91 9974712552',
        href: 'tel:+919974712552',
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent double submission
        if (status === 'sending') return;

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('error');
            setTimeout(() => setStatus(null), 3000);
            return;
        }

        setStatus('sending');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS configuration missing:', { serviceId, templateId, publicKey });
            setStatus('error');
            setTimeout(() => setStatus(null), 4000);
            return;
        }

        try {
            // Send email via EmailJS (primary — instant email)
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    reply_to: formData.email,
                    sent_date: new Date().toLocaleString(),
                },
                publicKey
            );

            // Also save to MongoDB via backend (secondary — for storage)
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
                const response = await fetch(`${API_URL}/contact`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    console.error('Backend submission failed:', errorData);
                }
            } catch (backendError) {
                console.warn('Backend storage failed, but email was sent via EmailJS:', backendError);
            }

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus('error');
        }

        setTimeout(() => setStatus(null), 4000);
    };

    return (
        <section id="contact" className="section-spacing relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-accent-500/5" />

            {/* Decorative Orbs */}
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />

            <div className="content-container relative z-10 w-full max-w-full">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Have a project in mind? Let's work together!"
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-6xl mx-auto w-full max-w-full">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6 w-full max-w-full"
                    >
                        <h3 className="text-xl font-bold text-gray-200 mb-6">
                            Contact Information
                        </h3>

                        {contactInfo.map((info) => (
                            <motion.div
                                key={info.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-5 w-full max-w-full overflow-hidden"
                            >
                                <div className="flex items-center gap-4 w-full">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                                        <info.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-gray-200 hover:text-primary-400 transition-colors block truncate w-full"
                                                title={info.value}
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-200 truncate w-full" title={info.value}>{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Availability Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-5 w-full max-w-full"
                        >
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3 flex-shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                                </span>
                                <p className="text-gray-300 min-w-0">
                                    Available for freelance work
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 w-full max-w-full"
                    >
                        <form onSubmit={handleSubmit} className="glass-form p-6 sm:p-8 md:p-10 w-full max-w-full overflow-hidden">
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input
                                        label="Your Name"
                                        name="name"
                                        placeholder="Rajesh Prajapati"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        label="Your Email"
                                        name="email"
                                        type="email"
                                        placeholder="[EMAIL_ADDRESS]"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <Input
                                    label="Subject"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                />

                                <Textarea
                                    label="Your Message"
                                    name="message"
                                    placeholder="Tell me about your query..."
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                />

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full"
                                    disabled={status === 'sending'}
                                    icon={status === 'success' ? FiCheck : status === 'error' ? FiAlertCircle : FiSend}
                                >
                                    {status === 'sending' ? 'Sending...' :
                                        status === 'success' ? 'Message Sent!' :
                                            status === 'error' ? 'Error! Try Again' :
                                                'Send Message'}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}