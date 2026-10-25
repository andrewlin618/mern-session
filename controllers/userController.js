const users = require('../data/users.json')
const withoutPassword = require('../utils/withoutPassword')

module.exports = {
    getAllUsers: (req, res) => {
        return res.send(users.map(withoutPassword));
    },
    getUserByUsername: (req, res) => {
        const user = users.find(user => user.username === req.params.username)
        if (!user) {
            return res.status(404).send("User doesn't exist!")
        }
        return res.send(withoutPassword(user));
    }
}