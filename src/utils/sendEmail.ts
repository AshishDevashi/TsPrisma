import * as nodemailer from 'nodemailer'
import { EMAILType } from './types';
import * as ejs from 'ejs'
import * as fs from 'fs'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    }
});

export const sendMail = async(dataTosend :EMAILType) => {
    try {
        const emailTemplatePath = 'views/emailTemplate.ejs'
        const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf-8');
        const renderedTemplate = ejs.render(emailTemplate, {otp : dataTosend.otp});
        const mailOptions:nodemailer.SendMailOptions  = {
            from: process.env.EMAIL,
            to: dataTosend.email,
            subject: dataTosend.subject,
            html: renderedTemplate
        }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent:'+ info.response);
            }
        })
    } catch (error) {
            console.log('this is error : from nodemailer: '+ error)
    }
  
}