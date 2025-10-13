const User = require('../models/User')

const registerUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const newUser = new User({ username, password })
    const user = await newUser.save()
    res.status(201).json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { registerUser }