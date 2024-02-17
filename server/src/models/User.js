const bcrypt = require('bcrypt');
const validator = require('validator');

class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  async validate() {
    const errors = [];

    if (!validator.isLength(this.username, { min: 4, max: 30 })) {
      errors.push('Username must be between 4 and 30 characters long.');
    }

    if (!validator.isEmail(this.email)) {
      errors.push('Invalid email format.');
    }

    if (!validator.isLength(this.password, { min: 8 })) {
      errors.push('Password must be at least 8 characters long.');
    }

    return errors; 
  }

  async hashPassword() {
    const salt = await bcrypt.genSalt(10); 
    return await bcrypt.hash(this.password, salt);
  }
}

module.exports = User;
