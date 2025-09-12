const express = require('express')
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const port = 3000

const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})