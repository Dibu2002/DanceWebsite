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

// read through post
app.post('/handleForm',(req,res)=>{
    let varia=req.body;
    res.render('handleForm',{'data':varia})
});

app.listen(port,()=>console.log("application started"))
