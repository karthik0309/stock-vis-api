require("dotenv").config();
const express = require('express')
const cors = require('cors')
const app = express()

const stockRouter = require('./routes/StockData')

app.use(express.json())
app.use(cors())

app.use("/",stockRouter)

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`App running at port ${PORT}`)
})