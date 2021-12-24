const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) {
        console.log("mongo DB connection sucessfully");
    } else {
        console.log(
            "error in mongo DB connection" + JSON.stringify(err, undefined, 2)
        );
    }
});

require("./user.model");