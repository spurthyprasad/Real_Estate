const express = require('express')
const app=express()
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))// allows to access the information coming from forms
app.set("view engine","ejs")
app.use(express.json())
// app.use(logger)

// app.get('/',(req, res) => {
   
//     res.render("index",{text:"spurthy"})
//  })

 const userRouter= require('./routes/users')

 app.use('/users',userRouter)


 
 app.listen(8200)  