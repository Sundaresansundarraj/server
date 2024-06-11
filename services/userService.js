const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

const register = async (username, password, position) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return User.create({ username, password: hashedPassword, position });
};

const login = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) throw new Error('User not found');
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error('Invalid password');

  const token = jwt.sign({ id: user.id, position: user.position }, process.env.JWT_SECRET);
  return token;
};

module.exports = { register, login };
