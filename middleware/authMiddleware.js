const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).json({ message: 'Failed to authenticate token' });
    req.userId = decoded.id;
    req.userPosition = decoded.position;
    next();
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.userPosition !== 'admin') return res.status(403).json({ message: 'Requires admin role' });
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next);
};

module.exports = { verifyAdmin, verifyUser };
