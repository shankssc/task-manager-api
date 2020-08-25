const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SEND_GRID_API_KEY)

sgMail.send({
    to: 'suyash15122@gmail.com',
    from: 'suyash15122@gmail.com',
    subject: 'Nothing is true everything is permitted',
    text: 'I hope this reaches you my liege'
})

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'suyash15122@gmail.com',
        subject: 'Yahallo',
        text: `Welcome to the app , ${name}. How are you liking the app?`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'suyash15122@gmail.com',
        subject: 'sad Yahallo(Regret)',
        text: `Goodbye, ${name}. Hope you return again soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}