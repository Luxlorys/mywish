const jwt = require('jsonwebtoken');

require('dotenv').config({ path: '../../../.env'});


const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
  
    if (!token) {
      return res.status(401).json({ message: 'Authorization is required' });
    }
  
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        if (err instanceof jwt.TokenExpiredError) {
          return res.status(401).json({ message: 'Token expired' });
        } else if (err instanceof jwt.JsonWebTokenError) {
          console.log(err);
          return res.status(401).json({ message: 'Invalid token' });
        } else {
          console.error(err);
          return res.status(500).json({ message: 'Internal server error' });
        }
      }
  
      console.log(decodedToken);
      next();
    });
};


const checkCurrentUser = (req, res, next) => {}



module.exports = {
    requireAuth,
}