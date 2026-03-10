const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Verify connection on startup
transporter.verify((error) => {
    if (error) {
        console.error('Email config error:', error.message);
    } else {
        console.log('Email service ready');
    }
});

module.exports = transporter;
