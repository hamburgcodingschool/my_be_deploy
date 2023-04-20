require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.json({
        status: "OK",
        data: {
            message: "My Awesome REST API data!!!!!",
            content: [23, 12, 34, 2, 3, 43, 34, 34, 23],
            env1: process.env.MY_SUPER_SECRET_KEY,
            env2: process.env.MY_OTHER_SECRET,
        }
    });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});