const path = require("path");
// const router = require("express").Router();

// Import routes; 
// const authRoutes = require("./authRoutes");
const apiRoutes = require("./apiRoutes");

app.use('/api', (req, res) => {
    res.send('api call')
});
// router.use('/auth', authRoutes);

// If no routes are hit, send the React app
router.use("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;