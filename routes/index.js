const path = require("path");
const router = require("express").Router();

// Import routes; 
const authRoutes = require("./authRoutes");
const apiRoutes = require("./apiRoutes");

router.use(authRoutes);
router.use('/api', apiRoutes);


// If no routes are hit, send the React app
router.use("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;