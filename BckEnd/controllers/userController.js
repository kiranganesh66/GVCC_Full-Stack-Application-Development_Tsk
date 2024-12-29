const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      const users = await User.find();
      res.json(users);
    } else {
      const user = await User.findById(req.user.id);
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

module.exports = { getUsers };
