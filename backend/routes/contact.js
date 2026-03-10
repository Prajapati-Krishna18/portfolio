const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendContactEmail } = require('../services/emailService');
const { validateContact } = require('../middleware/validator');
const { contactLimiter } = require('../middleware/rateLimiter');

// POST /api/contact - Submit contact form
router.post('/', contactLimiter, validateContact, async (req, res, next) => {
    try {
        const { name, email, subject, message } = req.body;

        // Get IP address for logging
        const ipAddress = req.ip || req.headers['x-forwarded-for'] || 'unknown';

        // Save to database
        const contact = await Contact.create({
            name,
            email,
            subject: subject || 'No Subject',
            message,
            ipAddress
        });

        // Send email notification
        try {
            await sendContactEmail({ name, email, subject, message });
        } catch (emailError) {
            // Log email error but don't fail the request
            console.error('Email sending failed:', emailError.message);
        }

        res.status(201).json({
            success: true,
            message: 'Message sent successfully! I will get back to you soon.'
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
