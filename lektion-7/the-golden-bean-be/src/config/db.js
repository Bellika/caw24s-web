const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB', error.message)
    throw new Error('Failed to connect to MongoDB') 
  }
}

module.exports = connectDB