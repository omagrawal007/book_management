'use strict'
var nodemailer = require('nodemailer');
var SendUserVerifyMail = function(to,subject,html,cb){



    let mailOptions = {
        from: 'om@hcl.com',
        to: to, // list of receivers
        subject: subject, // Subject line
        text: 'Hello world?', // plain text body
        html: html // html body
    };
    SendMail(mailOptions,function(err,result){
        cb(err,result);
    })
}  



var SendMail=function(mailOptions,cb){

// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount(function(err, account){

    // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.vstglobal.com',
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     tls: {
    //         rejectUnauthorized: false
    //     },
    //     auth: {
    //         user: 'om@vstglobal.com', // generated ethereal user
    //         pass: 'Network2018*'  // generated ethereal password
    //     }
    // });


    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'fzrlmi5jiao2fb5o@ethereal.email',
            pass: 'etUG9GCUqscQ2YTyNY'
        }
    });

 // setup email data with unicode symbols

transporter.sendMail(mailOptions,function(error, info) {
        console.log("error....",error)
        console.log("info....",info)
        if (error) {
            cb(error,null)
        }
        else{
            cb(null,info)
        }
    });
} );
    




   

}
exports.SendUserVerifyMail=SendUserVerifyMail;

