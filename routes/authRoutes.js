const router = require("express").Router();
const authController = require("../controllers/authController")
const { isAuthenticated, isAdmin } = require("../middleware/authMiddleware")
const withoutPassword = require("../utils/withoutPassword")

router.route('/login')
    .post(authController.login);

router.route('/logout')
    .post(authController.logout);

router.route('/register')
    .post(authController.signUp)
// .delete(authController.deleteAccount)
// .put(authController.changePassword)

router.route('/authentication')
    .post(isAuthenticated, (req, res) => res.send(withoutPassword(req.local)))
    
module.exports = router;
