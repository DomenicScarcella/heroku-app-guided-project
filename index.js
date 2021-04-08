const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 9000
const path = require("path")

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))

app.use("/api/",(_,res)=>{
    res.json({data:"API is accounted for"})
})

app.listen(port,()=>{
    console.log(`Server is alive on port ${port}`)
})

// console.log("Its alive!!!!!!")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)//mac USER
// console.log(process.env.PORT)
// console.log(process.env.FOOD)
// console.log(process.env.REALLY)
// console.log(process.env.GREET)