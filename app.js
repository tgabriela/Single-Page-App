const express = require("express")  
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const indexRouter = require("./index")

const app = express()

app.use(cors())
app.use(express.json())
app.use(indexRouter)
app.listen(5000, () => {
    console.log("Server started on: 5000");
});



