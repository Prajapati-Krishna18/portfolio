const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const { validateFeedback } = require('../middleware/validator');
const { feedbackLimiter } = require('../middleware/rateLimiter');

// GET /api/feedback — Return all feedback (WITHOUT email for privacy)
router.get('/', async (req, res, next) => {
    try {
        const feedbacks = await Feedback.find()
            .select('-email -__v')   // Exclude email and __v from response
            .sort({ createdAt: -1 }) // Newest first
            .lean();

        res.json({ success: true, data: feedbacks });
    } catch (error) {
        next(error);
    }
});

// POST /api/feedback — Submit new feedback
router.post('/', feedbackLimiter, validateFeedback, async (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        const feedback = await Feedback.create({
            name: name || 'Anonymous',
            email,
            message
        });

        // Return the created feedback WITHOUT email
        const response = {
            _id: feedback._id,
            name: feedback.name,
            message: feedback.message,
            reply: feedback.reply,
            replyDate: feedback.replyDate,
            createdAt: feedback.createdAt
        };

        res.status(201).json({ success: true, data: response });
    } catch (error) {
        next(error);
    }
});

// PATCH /api/feedback/:id/reply — Admin replies to a feedback
router.patch('/:id/reply', async (req, res, next) => {
    try {
        const { reply } = req.body;
        if (!reply || !reply.trim()) {
            return res.status(400).json({ success: false, error: 'Reply message is required' });
        }

        const feedback = await Feedback.findByIdAndUpdate(
            req.params.id,
            { reply: reply.trim(), replyDate: new Date() },
            { new: true }
        ).select('-email -__v');

        if (!feedback) {
            return res.status(404).json({ success: false, error: 'Feedback not found' });
        }

        res.json({ success: true, data: feedback });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
