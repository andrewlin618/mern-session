const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 3001;

app.get('/api', (req, res) => {
    res.send('This is Api call')
})

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"))
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})
