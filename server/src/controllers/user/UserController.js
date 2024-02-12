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





module.exports = {
    getUsers,
    getUserById,
    deleteUserById
};
