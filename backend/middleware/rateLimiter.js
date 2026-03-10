const rateLimit = require('express-rate-limit');

const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 5, // 5 requests per hour per IP
    message: {
        success: false,
        error: 'Too many submissions. Please try again in an hour.'
    },
    standardHeaders: true, // Return rate limit info in headers
    legacyHeaders: false
});

module.exports = { contactLimiter };
