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
        const user = await service.getUser(id);

        if (!user || user.length === 0) {
            res.json({ message: 'use not found' });
        } else {
            res.status(200).json({ user: user });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}





module.exports = {
    getUsers,
    getUserById,
};
