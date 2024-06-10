const nodemailer = require("nodemailer");

module.exports = {
  sendForm: async (ctx) => {
    try {
      const { emri, mbiemri, email, subjekti, mesazhi } = ctx.request.body.data;

      const transporter = nodemailer.createTransport(
        {
          service: "gmail",
          auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_TOKEN,
          },
          debug: true,
        },
        {
          logger: true,
        }
      );

      let emailText =
        `Full Name: ${emri} ${mbiemri}\n` + `Email: ${email}\n` + `${mesazhi}`;

      const emailMessage = {
        from: "info@origin3agency.com",
        to: `info@origin3agency.com`,
        subject: subjekti,
        text: emailText,
      };

      await transporter.sendMail(emailMessage);
      ctx.send({ message: `Email sent successfully!` });
    } catch (error) {
      console.error(error);
      ctx.send({ error: "Failed to send email", details: error.message });
    }
  },
};
