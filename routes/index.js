const path = require("path");
const router = require("express").Router();

//Import routes;
// const apiRoutes = require("./apiRoutes");
// const authRoutes = require("./authRoutes");

router.use("/api", (req, res) => {
    res.send('hello');
});

// If no routes are hit, send the React app
router.use("*", (req, res) =>
    res.sendFile(path.join(__dirname, "/../client/build/index.html"))
);

module.exports = router;