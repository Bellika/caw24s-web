const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization token required' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, 'JWT_SECRET')
    req.user = decoded
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ message: 'Invalid or expired token' })
  }
}

module.exports = requireAuth