const express = require('express')
var cors = require('cors')

// Initialize Express app
const app = express()

// Set up CORS and JSON middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => { res.send("AuthAPI.") })

app.listen(3080)