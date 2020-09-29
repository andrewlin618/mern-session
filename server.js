const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('./routes');
// const cors = require('cors')

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Session Settings;
app.use(session({
    secret: 'some secret word',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        secure: false
    }
}))

app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})
