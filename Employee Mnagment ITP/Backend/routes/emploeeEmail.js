import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nilanineranjika@gmail.com',
        pass: 'kgyo dqct hmjl chrt'
    }
});

const sendEmail = (emailOptions) => {
    transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

export default sendEmail;

