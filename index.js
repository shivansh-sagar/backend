require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000; 
const data = {
    
        "id": 10,
        "title": "HP Pavilion 15-DK1056WM",
        "description": "HP Pavilion 15-DK1056WM Gaming...",
        "price": 1099,
        "discountPercentage": 6.18,
        "rating": 4.43,
        "stock": 89,
        "brand": "HP Pavilion",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
        "images": [
          "https://cdn.dummyjson.com/product-images/10/1.jpg",
          "https://cdn.dummyjson.com/product-images/10/2.jpg",
          "https://cdn.dummyjson.com/product-images/10/3.jpg",
          "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
        ]
      
}
app.get('/', (req,res)=>{
    res.send('hello world')
})

app.get('/twitter', (req,res)=>{
    res.send('shivanshu sagar')
})
app.get('/data',(req,res)=>{
    res.json(data)
})
app.get('/login', (req,res)=>{
    res.send('<h1>login at shivanshu</h1>')
})

app.listen(port , ()=>{
    console.log(`Example app listening on port ${port}`)
})