const express = require('express');
const app = express();
const routes = require('./routes');

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})