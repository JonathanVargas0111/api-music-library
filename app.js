require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const PORT = process.env.PORT || 8080


/**
 * 
 * Aqui se invocan las rutas
 */

app.use("/api", require("./routes"))

app.listen(PORT,()=>{
    console.log("corriendo por puerto "+PORT)
    
})

dbConnect()