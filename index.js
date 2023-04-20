const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.json({
        status: "OK",
        data: {
            message: "My Awesome REST API data!!!!!",
            content: [23, 12, 34, 2, 3, 43, 34, 34, 23]
        }
    });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});