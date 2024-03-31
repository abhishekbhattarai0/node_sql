import * as nodemailer from 'nodemailer'

const SENDMAIL = async(Maildetails, callback) => {
    try {
        const transporter = nodemailer.createTransport({
            //gmail port = 465
            port: 465,
            service: "Gmail",
            host: "smtp.gmail.com",
            secure: true,
            auth: {
                user: 'abhisheknormal254@gmail.com',
                pass: 'ulip bjaa cldb uiin'
            }
        })

        const info = await transporter.sendMail(Maildetails)
        callback(info)
    } catch (error) {
        console.log(error)
    }
}

export default SENDMAIL