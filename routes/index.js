const path = require("path");
const router = require("express").Router();

// Import routes; 
const apiRoutes = require("./apiRoutes");
const authRoutes = require("./authRoutes");

router.get('/test', (req, res) => {
    res.send('Test route.')
})

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);

// If no routes are hit, send the React app
router.use("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;