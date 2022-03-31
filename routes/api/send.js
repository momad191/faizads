

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'r7al.social@gmail.com',
        pass: 'R7al2366671911#'
    }
});

// Step 2
let mailOptions = {
    from: 'r7al.social@gmail.com', // TODO: email sender
    to: 'moemad191@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});