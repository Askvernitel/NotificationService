
var notifService = require("./notif.service");
var emails = require("../builders/email.builder");
function verifyToken(token) {

}

const GrpcService = {
  sendNotif: function sendNotif(call, callback) {
    let req = call.request;
    switch (req.action) {
      case "register":
        console.log(req.token);
        console.log(req.message);
        let config = { recipientEmail: req.message, code: req.token };
        let email = emails().registrationEmail(config)
        notifService.sendEmail(email);
        break;
      default:
        console.log("INVALID ACTION");
    }
    console.log(req.message);
    console.log(req.action);
    callback(null, { success: true });
  }
}

module.exports = GrpcService
