// const path = require("path");
const router = require("express").Router();
// const users = require("../data/users.json");
// const userController = require("../controllers/userController")
// const { isAdmin, isAuthenticated } = require("../middleware/authMiddleware.js")


router.route("/")
    .get((req, res) => res.send('API call succeeded!'))

// router.route("/users")
//     .get(isAdmin, userController.getAllUsers);

// router.route('/user/:username')
//     .get(userController.getUserByUsername);

module.exports = router;
