require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000; 

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.get('/twitter', (req,res)=>{
    res.send('shivanshu sagar')
})
app.get('/login', (req,res)=>{
    res.send('<h1>login at shivanshu</h1>')
})

app.listen(process.env.PORT , ()=>{
    console.log(`Example app listening on port ${port}`)
})