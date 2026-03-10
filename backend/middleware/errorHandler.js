const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            error: 'Validation failed',
            details: Object.values(err.errors).map(e => e.message)
        });
    }

    // CORS error
    if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({
            success: false,
            error: 'CORS error - Origin not allowed'
        });
    }

    // MongoDB duplicate key error
    if (err.code === 11000) {
        return res.status(400).json({
            success: false,
            error: 'Duplicate entry'
        });
    }

    // Default server error
    res.status(500).json({
        success: false,
        error: process.env.NODE_ENV === 'production'
            ? 'Server error. Please try again later.'
            : err.message
    });
};

module.exports = errorHandler;
