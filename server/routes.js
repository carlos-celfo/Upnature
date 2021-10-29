const express = require("express");
const postData = require("./controller");
const router = express.Router();

// post form data.
router.post("/data", postData.createData);

// get form data
router.get("/data", postData.getData);


// update

// delete

module.exports = router;

// http://localhost:5000/form/data - route needed for front end to post