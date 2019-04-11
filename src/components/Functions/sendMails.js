const nodeMailer = require("nodemailer");

const verstuurMail = () => {
    console.log("fjslakfjlask")
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jesse.tijsma@gmail.com',
            pass: 'txnjzoleiczysgxf\n'
        }
    });
    console.log("Stap 2")

    const mailOptions = {
        from: "Jesse <jesse.tijsma2@gmail.com>",
        to: "jesse.tijsma@gmail.com",
        subject: "Tst",
        text: "Test"
    }

    transporter.sendMail(mailOptions, (err, res) => {
        if (err)
            console.log(err.message);
        else
            console.log("Email sent!");
    });
};

verstuurMail()