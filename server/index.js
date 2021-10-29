const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
const port = 5000


const corsOptions = {
  origin: "http://localhost:5000"
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// please make sure to replace <Password> with the database password
const conn_str = 'mongodb+srv://dayo25:Tunde%4025@dayos-db.aa7hq.mongodb.net/mydb?retryWrites=true&w=majority'

mongoose.connect(
conn_str,
{ 
useNewUrlParser: true, 
useUnifiedTopology: true 
},(err) => {
if (err) {
console.log("error in connection", err);
} else {
console.log("mongodb is connected");
}});
const formRoutes = require("./routes")
app.use("/form", formRoutes) 
app.get('/', (req, res) => {
  res.send('Hello World!')
})


//create a server object:
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})