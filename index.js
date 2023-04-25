require("dotenv").config();

const express = require("express");
const db = require("./db");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    
    db.getPeople(function(results) {

        res.json({
            status: "OK",
            data: {
                message: "My Awesome REST API data!!!!!",
                content: [23, 12],
                env1: process.env.MY_SUPER_SECRET_KEY,
                env2: process.env.MY_OTHER_SECRET,
            },
            people: results
        });
    });

    
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
