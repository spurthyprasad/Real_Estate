const express = require('express')
const app=express()
const client = require('./connection.js')

// app.use(express.static("public"))
// app.use(express.urlencoded({extended:true}))// allows to access the information coming from forms
// app.set("view engine","ejs")
// app.use(express.json())



app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();

app.get('/users', (req, res)=>{
    client.query(`Select * from admin`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
app.get('/users/:id', (req, res)=>{
    client.query(`Select * from admin where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
k