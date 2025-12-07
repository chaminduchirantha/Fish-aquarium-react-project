import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendOrderConfirmationMail = async (to: string, name: string, address:string,orderDate:string,orderType:string, fishname:string , price:string,qty:number,  orderId: string) => {
  const mailOptions = {
    from: "chaminduchirantha10@gmail.com",
    to,
    subject: "Order Confirmation - Fish Aquarium Store",
    html: `
      <h2>Hi ${name},</h2>
      <p>Your address : ${address}<p>
      <p>order date :  ${orderDate}<p>
      <p>order type : ${orderType}<p>
      <p>Fish name : ${fishname}<p>
      <p>Fish price : ${price}<p>
      <p>Fish Qty : ${qty}<p>
      <p>Your order has been placed successfully! 🎉</p>
      <p><strong>Order ID:</strong> ${orderId}</p>
      <p>Thank you for shopping with us.</p>

      <hr />
      <p>Fish Aquarium Store</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendOrderConfirmationMailAccessories = async (to: string, name: string, address:string,orderDate:string,orderType:string, itemname:string , price:string,qty:number,  orderId: string) => {
  const mailOptions = {
    from: "chaminduchirantha10@gmail.com",
    to,
    subject: "Order Confirmation - Fish Aquarium Store",
    html: `
      <h2>Hi ${name},</h2>
      <p>Your address : ${address}<p>
      <p>order date :  ${orderDate}<p>
      <p>order type : ${orderType}<p>
      <p>Item name : ${itemname}<p>
      <p>Item price : ${price}<p>
      <p>Item Qty : ${qty}<p>
      <p>Your order has been placed successfully! 🎉</p>
      <p><strong>Order ID:</strong> ${orderId}</p>
      <p>Thank you for shopping with us.</p>

      <hr />
      <p>Fish Aquarium Store</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
