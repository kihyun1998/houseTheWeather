const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname,'./public');
app.use(express.static(publicDirectoryPath))

//router
app.get('/',(req,res) =>{
    res.send("hi");
})
app.get('/home',(req,res)=>{
    res.send("Home pasge");
})

app.listen(8080, ()=>{
    console.log("Server is running!");
})