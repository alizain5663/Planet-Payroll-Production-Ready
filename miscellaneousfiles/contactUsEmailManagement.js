const nodemailer = require("nodemailer");

const sendMail = async(payLoad)=>{
    try {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // create reusable transporter object using the default SMTP transport
        const _SmtpService = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'hello@planetpayroll.co.uk', // generated ethereal user
            pass: 'vgexhefmypwpljjl', // generated ethereal password
          },
        });
    
        //Email Object
        const _EmailObject = {
          from: payLoad.email, // sender address
          to: 'hello@planetpayroll.co.uk', // list of receivers
          subject: payLoad.subject, // Subject linea
          html: `<b>
          <h3>UserName: ${payLoad.foreName}</h3>
          <h3>UserEmail: ${payLoad.email}</h3>
          <h3>UserMessage: ${payLoad.description}</h3>
          <br>
          <br>
          <br>
          <h5>Note: This is One Time Link and will Expire in 5 minute You cannot Use it Once it Expired</h5>
          </b>`, // html body
        };
    
        // Send Email 
    
        const _SendEmail = await _SmtpService.sendMail(_EmailObject);
        return {
          Message: `Email has sent successfuly one of our team member will contact you shortly`,
          Data: true,
          Result: _SendEmail.response,
        };
      } catch (error) {
        return {
          Message: error.message,
          Data: false,
          Result: null
        }
    
      }
}

module.exports = { sendMail }