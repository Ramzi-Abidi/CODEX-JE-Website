const express = require("express");
const cors = require("cors");
const sendEmail = require("./sendingEmail");

const nodemailer = require("nodemailer") ;
let app = express();

app.use(cors());

app.use(express.json());        // very important

//app.use(express.urlencoded());

app.post("/", (req, res) => {
    console.log(req.body);

    async function main() {
        let testAccount = await nodemailer.createTestAccount();
        
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "epactinfos@gmail.com", // generated ethereal user
                pass: "cbkkdapopygbgojq", // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: "epactinfos@gmail.com", // sender address
            to: "ramziinfo2001@gmail.com", // list of receivers
            subject: "new demand", // Subject line
            text: "Demands", // plain text body
            html: `
                <b> You received a new task : </b>
                    <li> Nom : ${req.username} </li>
                    <li> Email : ${req.body.email} </li>
                    <li> Phne Number : ${req.body.email} </li>
                    <li> Type of Project : ${req.body.project} </li>
                    <li> text : ${req.body.text} </li>
                `, // html body
        });
    }
    main().catch(console.error);

});

let PORT = 5000;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
