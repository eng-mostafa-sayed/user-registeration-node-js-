require("./config/config");
require("./models/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const rtsIndex = require("./routes/index.router");
const res = require("express/lib/response");

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/api", rtsIndex);

//error handler
app.use((err, req, res, next) => {
    if (err.name == "ValidationError") {
        var valError = [];
        Object.keys(err.errors).forEach((key) =>
            valError.push(err.errors[key].message)
        );
        res.status(442).send(valErrors);
    }
});
//start server
app.listen(process.env.PORT, () =>
    console.log("server started at port : ${process.env.PORT}")
);