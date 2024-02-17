const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../../../.env'});
const userController = require('./userController');


const MAX_AGE = 24 * 60 * 60; // 1 day

const generateJWT = async (username) => {
    const uniqueId = crypto.randomBytes(16).toString('hex');
    const payload = { username, uniqueId };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '24h'});
    return token;
}

const generateAndSetJWTCookie = async (username, res) => {
    const token = await generateJWT(username);
    res.cookie('jwt', token, { httpOnly: true, maxAge: MAX_AGE * 1000, secure: true });
}


async function authenticateUser(username, password) {
    const user = await userController.getUserByUsername(username);

    if (!user) { throw new Error('User not found'); }

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) { throw new Error('Incorrect password'); }

    return user;
  }


const userLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(404).json({ message: 'username is required'})
  }

  if (!password) {
    return res.status(404).json({ message: 'password is required'})
  }

  try { 
    const user = await authenticateUser(username, password);
    await generateAndSetJWTCookie(user.username, res);
    return res.status(200).json({ user: username });
  } catch (error) {
    if (error.message === "User not found") {
        return res.status(404).json({ message: "User not found" });
    } else if (error.message === "Incorrect password") {
        return res.status(401).json({ message: "Incorrect password" });
    } else {
        return res.status(500).json({ message: "Internal server error" });
    }
  }
};
  


const userLogOut = async (req, res) => {
    try {
        res.cookie("jwt", '', { maxAge: 1 });
        return res.status(200).json({ message: 'successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error'});
    }
}

module.exports = {
    userLogin,
    userLogOut,
}