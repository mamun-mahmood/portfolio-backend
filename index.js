const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
const nodeMailer = require('nodemailer')
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mma622992@gmail.com',
        pass: '0426899bd//??'
    }
})

app.get('/', (req, res) => {
    res.send('hi from database');
})
app.get('/list', (req, res) => {
    res.send('listing')
})
app.post('/sendMail', (req, res) => {
    console.log(req.body);
    const mailOption = {
        from: 'Mamun',
        to: req.body.email,
        subject: 'Auto Reply',
        text: `Hi ${req.body.name}, thank you for contacting with me. Hope you are doing great. I'll response as soon as I can. If there is any emergency, fell free to call me at 8801799464391`
    }
    transporter.sendMail(mailOption, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email sent:' + info.response);
        }
    })
})
app.listen(process.env.PORT || 5001)