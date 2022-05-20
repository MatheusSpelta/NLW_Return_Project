import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "86db4742c61acc",
        pass: "ab0f73b31d86b3"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Matheus Spelta <matheuszacche@hotmail.com>',
            subject,
            html: body,
        })
    };
}