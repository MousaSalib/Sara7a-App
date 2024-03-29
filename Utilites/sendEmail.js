// const nodemailer = require("nodemailer");
// module.exports = async(toEmail, subject, message) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.APP_EMAIL_ADDRESS,
//                 pass: process.env.APP_EMAIL_PASSWORD
//             }
//         });

//         const mailOptions = {
//             from: process.env.APP_EMAIL_ADDRESS,
//             to: toEmail,
//             subject: subject,
//             html: message
//         }

//         const info = await transporter.sendMail(mailOptions);
//         console.log("Email sent" + info.response)
//     }catch(error) {
//         console.log(error);
//         throw new Error("internal server Error (nodemailer)")
//     }
// }
const nodemailer = require("nodemailer");
const sendNotificationEmail = async(toEmail, subject, message) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.APP_EMAIL_ADDRESS,
                pass: process.env.APP_EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.APP_EMAIL_ADDRESS,
            to: toEmail,
            subject: subject,
            html: message
        }

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent" + info.response)
    }catch(error) {
        console.log(error);
        throw new Error("internal server Error (nodemailer)")
    }
}
export default sendNotificationEmail;