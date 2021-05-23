const express=require('express');
const fs=require('fs');
const app=express();
const path=require('path');
const port=80;

app.use('/public',express.static("public"));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('home.pug')          //use render (not send)with pug
});
app.get('/services',(req,res)=>{
    res.render('services.pug')
});
app.get('/about',(req,res)=>{
    res.render('about.pug')
});
app.get('/showconfirm',(req,res)=>{
    res.render('showconfirm.pug')
});

app.get('/contact',(req,res)=>{
    res.render('contact.pug')
});
app.get('/registration',(req,res)=>{
    res.render('registration')
});
app.get('/read1',(req,res)=>{
    res.render('read1.pug')
});
app.get('/read2',(req,res)=>{
    res.render('read2.pug')
});

// app.get('/handleForm',(req,res)=>{
//     res.render('handleForm',{"data": 
//     {
//         "firstN":req.query.firstname,
//         "lastN":req.query.lastname,
//         "email":req.query.email,
//         "add":req.query.add,
//         "dob":req.query.dob,
//         "gender":req.query.gender,
//         "contact":req.query.contact,
//         "contact2":req.query.contact2,
//         "cardtype":req.query.cardtype,
//         "cardno":req.query.cardno,
//         "cvv":req.query.cvv,
//         "exdate":req.query.ex,
//     }
// })

// 2nd way through get
// let varia=req.query;
// res.render('handleForm',{'data':varia})
//  OR
// let vari = JSON.stringify(req.query);
// let varia=JSON.parse(vari);
// res.render('handleForm',{'data':varia})
// });

// read through post
app.post('/handleForm',(req,res)=>{
    let varia=req.body;
    res.render('handleForm',{'data':varia})

});

app.listen(port,()=>console.log("application started"))
