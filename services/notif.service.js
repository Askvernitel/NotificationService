var nodemailer = require("nodemailer")

const NotifService = {
  serverEmail: process.env.SERVER_MAIL,
  serverPasswd: process.env.SERVER_MAIL_PASSWD,
  init: function() {
    this.transporter = nodemailer.createTransport(
      {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: this.serverEmail,
          pass: this.serverPasswd
        }
      }
    )
  },
  sendEmail: async function(mailOpts) {
    mailOpts.from = this.serverEmail;
    console.log(mailOpts);
    /* const mailOpts = {
       from: `"Test" ${this.serverEmail}`,
       to: recipientEmail,
       subject: "Test",
       text: "This Ise Test",
     };*/
    await this.transporter.sendMail(mailOpts, (error, info) => {
      if (error) {
        console.error(error);
      }
      console.log(info);
    })
  }
}

module.exports = NotifService;
