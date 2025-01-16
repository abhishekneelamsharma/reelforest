import creatorModel from "@/_model/CreatorModel";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
});

export const POST = async (request) => {
    try {
        const { id } = await request.json();
        const data = await creatorModel.findByIdAndDelete({ _id: id });
        if (!data) {
            return NextResponse.json({ message: "Unable to delete creator", status: 0 });
        }
        await transporter.sendMail({
            from: '"Reel Forest"',
            to: data.email,
            subject: "Verfication Failed - Reel Forest",
            html: `
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f9f9f9; margin: 0; padding: 20px;">
            <table style="width: 100%; max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #dddddd; border-radius: 8px; padding: 20px;">
                <tr>
                    <td style="text-align: center;">
                        <h2 style="color: #333333;">Reel Forest</h2>
                        <p style="font-size: 16px; color: #d9534f; margin: 10px 0;">Verification Failed</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style="font-size: 14px; color: #555555; margin: 10px 0;">Hi, ${data.fullname}</p>
                        <p style="font-size: 14px; color: #555555; margin: 10px 0;">
                            Unfortunately, we were unable to verify your email address for your Reel Forest account. You can resend the verification request by clicking the button below:
                        </p>
                        <div style="text-align: center; margin: 20px 0;">
                            <a href="http://localhost:3000/creator/register" style="background-color: #007BFF; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-size: 16px;">Resend Verification Request</a>
                        </div>
                        <p style="font-size: 14px; color: #555555; margin: 10px 0;">
                            If you did not request this, you can safely ignore this email.
                        </p>
                        <p style="font-size: 14px; color: #555555; margin: 10px 0;">Best Regards,</p>
                        <p style="font-size: 14px; color: #555555; margin: 10px 0;">The Reel Forest Team</p>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center; padding: 20px 0;">
                        <p style="font-size: 12px; color: #aaaaaa;">If you have any questions, please contact us at <a href="mailto:support@reelforest.com" style="color: #007BFF;">support@reelforest.com</a>.</p>
                    </td>
                </tr>
            </table>
        </body>
    </html>
`,

        });
        return NextResponse.json({ message: "Request deleted successfully", status: 1 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal server error", status: 0 });
    }
}