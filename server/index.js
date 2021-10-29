const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")


// database connection imported 
require("./db/db")


const app = express()
const port = 5000


const corsOptions = {
  origin: "http://localhost:5000"
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const formRoutes = require("./routes")
app.use("/form", formRoutes) 


app.get('/', (req, res) => {
  res.send('Hello World!')
})


//create a server object:
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})