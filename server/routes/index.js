const express = require("express");
const router = express.Router();
const morgan = require("morgan");
const Controller = require("./controllers");

try {
  router.post("/", Controller.solve);
} catch (err) {
  throw err;
}

module.exports = router;
