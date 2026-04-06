const { body, validationResult } = require('express-validator');
const xss = require('xss');

// Sanitize all string inputs to prevent XSS
const sanitize = (value) => xss(value.trim());

const validateContact = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters')
        .customSanitizer(sanitize),

    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail()
        .customSanitizer(sanitize),

    body('subject')
        .optional()
        .trim()
        .isLength({ max: 200 }).withMessage('Subject max 200 characters')
        .customSanitizer(sanitize),

    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ min: 10, max: 5000 }).withMessage('Message must be 10-5000 characters')
        .customSanitizer(sanitize),

    // Handle validation errors
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array().map(e => e.msg)
            });
        }
        next();
    }
];

const validateFeedback = [
    body('name')
        .optional()
        .trim()
        .isLength({ max: 100 }).withMessage('Name max 100 characters')
        .customSanitizer(sanitize),

    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter a valid email address')
        .normalizeEmail()
        .customSanitizer(sanitize),

    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ min: 5, max: 2000 }).withMessage('Message must be 5-2000 characters')
        .customSanitizer(sanitize),

    // Handle validation errors
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array().map(e => e.msg)
            });
        }
        next();
    }
];

module.exports = { validateContact, validateFeedback };
