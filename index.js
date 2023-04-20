const express = require("express");
const app = express();

const port = 3000;

app.get("/", function(req, res) {
    res.json({
        status: "OK",
        data: "My Awesome REST API data!!!!!"
    });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});