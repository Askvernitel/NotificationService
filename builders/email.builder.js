

function EmailBuilder() {
  var email = {};
  return {
    typeRegistration: function(code) {
      email.subject = "Judge Registration";
      email.text = `You Successfuly Registered ${code}`;
      return this;
    },
    senderEmail: function(senderEmail) {
      email.from = senderEmail
      return this;
    },
    success: function() {
      return this;
    },
    recipientEmail: function(recipientEmail) {
      email.to = recipientEmail;
      return this;
    },
    build: function() {
      return email;
    },
  }
}

function EmailDirector() {
  return {
    registrationEmail: function(config) {
      let email = new EmailBuilder();
      email.recipientEmail(config.recipientEmail);
      email.senderEmail(config.senderEmail);
      email.typeRegistration(config.code)
      email = email.build();
      console.log(email);
      return email;
    }
  }
}

module.exports = EmailDirector;

