const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use(express.json())

app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/protected', require('./routes/protectedRoutes')) 

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
