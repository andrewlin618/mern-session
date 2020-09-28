// const path = require("path");
const router = require("express").Router();

router.route("/")
    .get((req, res) => res.send('API call succeeded!'))

router.route("/users")
    .get((req, res) => res.send('Users Routes.'));

module.exports = router;
