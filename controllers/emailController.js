var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "echaimadabe44@gmail.com",
        pass: "ialwaysforget",
    },
});

const sendMailToAdmin = (body) => {
    const mailOptions = {
        from: "youremail@gmail.com",
        to: "myfriend@yahoo.com",
        subject: "Message from webpage",
        text: body.message,
    };

    return transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return null;
        } else {
            console.log("Email sent: " + info.response);
            return info.response;
        }
    });
};

exports.sendMailToAdmin = sendMailToAdmin;
