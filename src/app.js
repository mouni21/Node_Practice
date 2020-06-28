const express = require('express')
const path=require("path")
const hbs = require('hbs')

// for generating a instance 
const app=express()

// define path used  for express consifure
const directorypath = path.join(__dirname,'../public')
const templatepath = path.join(__dirname,'../templates/views')
const partialspath = path.join(__dirname,'../templates/partials')


//set the handlebars engine and views location
app.set("views",templatepath)
app.set('view engine', 'hbs')
app.use(express.static(directorypath))
app.get('', (req,res)=>{
    res.render('index',{
        title:"Weather",
        name:"Moun"
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Moun'
    })
})
hbs.registerPartials(partialspath)

app.get('',(req,res)=>{
res.send("Hello Express!!!")
})
app.get('/about',(req,res)=>{
    res.send("Help Page")
})
app.listen(3000,()=>{
    console.log("server started")
})

console.log("server")