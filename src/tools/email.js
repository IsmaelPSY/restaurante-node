const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
          user: "ismaelpsy.12@gmail.com",
          pass: "170520210921"
        }
});

module.exports ={
    transporter
}