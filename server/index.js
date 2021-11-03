const express = require('express');

express()

    .use(express.json())

    // GET HOME
    .get("/home", (req, res) => {
        res.status(200).json({status: 200, message: "Hello this is the homepage"});
    })

    // POST HOME
    .post("/home", (req, res) => {
        console.log(req.body);
        res.status(200).json({status: 200, message: "Data received successfully"});
    })

    .listen(8000);