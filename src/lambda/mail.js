import nodemailer from 'nodemailer';
const mailer = require('nodemailer')

exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body)
    console.log(data)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jacquesbasseck@gmail.com',
            pass: 'zryaptmoojplkmey'
        }
    })

    const mailOptions = {
        from: data.email,   
        to: 'jabass3@outlook.fr',
        subject: 'Un message venant du site senradios',
        text: `
            Expéditeur: ${data.firstname} ${data.lastname}
            E-mail : ${data.email} 
            Message: ${data.message}
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            callback(error)
        }
        else {
            callback(null, {
                statusCode: 200,
                body: "Ok"
            })
        }
    })
}
