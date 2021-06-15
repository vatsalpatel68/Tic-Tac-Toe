require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const morgan = require("morgan");
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const errorHandler = require("./utilities/errorHandler");

//Options for the CORS.
var whitelist = ["http://localhost:3000"];
var corsOptions = {
  origin: function (origin, callback) {
    //Specially for postman.
    if (!origin) {
      callback(null, true);
    } else if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Logger.
app.use(morgan("tiny"));

// CORS.
app.use(cors(corsOptions));

//Body parser.
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

//Routes.
app.use(router);

//Global error handler. Because I don't like status code 500 for every error.
app.use(errorHandler);

//Start the server.
app.listen(PORT, () => console.log(`Backend code is run on PORT ${PORT}`));
