import 'dotenv/config'
import express from 'express'
import connectDB from './config/db.js'
import characterRoutes from './routes/characterRoutes.js'

const app = express()
const PORT = 5000

connectDB()

app.use(express.json())

app.use('/api/characters', characterRoutes)

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})