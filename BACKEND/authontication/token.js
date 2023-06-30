const jwt = require('jsonwebtoken');
const secretKey = "secretKey";

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(404).json({ message: 'No token provided.' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(404).json({ message: 'Invalid token.' });
        
      }
  
      req.user = decoded.user;
      next();
    });
  }
  
  module.exports = {
    authenticateToken
  };
  