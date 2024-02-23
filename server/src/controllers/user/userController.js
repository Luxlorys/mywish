const User = require('../../models/User');
const UserService = require('../../services/user/UserService');


const service = new UserService();

const getUsers = async (req, res) => {
    const { limit } = req.query;
    try {
        const users = await service.getUsers(limit);

        if (!users || users.length === 0) {
            res.json({ message: 'no users found' });
        } else {
            res.status(200).json({ users: users });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUserByUsername = async (username) => {
    try {
        return await service.getUserByUsername(username);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await service.getUserById(id);

        if (!user || user.length === 0) {
            res.json({ message: 'use not found' });
        } else {
            res.status(200).json({ user: user });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteUserById = async (req, res) => {
    const { id } = req.params;

    const user = await service.getUserById(id);

    if (isNaN(parseInt(id))) {
        return res.status(400).json({ message: 'Id must be a valid integer' });
      }
  
    // check whether user is exists
    if (user.length === 0) {
        return res.status(400).json({ message: 'User not found' });
    }

    try {
        await service.deleteUser(id);
        res.status(200).json({ message: 'deleted successfully' });
    } catch (error) {
        console.error(`Error deleting gift ${id}:`, error);
  
        return res.status(500).json({ message: error });
    }
}


const saveUser = async (req, res) => {
    const { username, password, email } = req.body;
    const user = new User(username, password, email);

    const validationErrors = await user.validate();

    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors});
    }

    const hashedPassword = await user.hashPassword();

    try {
        await service.saveUser(username, hashedPassword, email);
        return res.status(200).json({ message: `${username} saved successfully`});
    } catch (error) {
        return res.status(400).json({ message: 'Failed to save new user' })
    }
}





module.exports = {
    getUsers,
    getUserById,
    deleteUserById,
    saveUser,
    getUserByUsername
};
