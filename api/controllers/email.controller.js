import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
  const { username, tel, email, city}  = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASS,
      },
    });

    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Nouvelle commande",
      html: `
        <h1>Nouvelle commande reçue</h1>
        <h2><strong>Full Name:</strong> ${username}</h2>
        <h2><strong>Email:</strong> ${email}</h2>
        <h2><strong>Tel Number:</strong> ${tel}</h2>
        <h2><strong>City:</strong> ${city}</h2>
      `,
    };

    let info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Order is placed successfully" });
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.toString());
  }
};
