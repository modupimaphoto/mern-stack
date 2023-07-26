const express = require("express");
const router = express.Router();

router
	.get("/", (req ,res) => {
		res.send({email: "jay@gmail.com", password: "Jay12"});
	})
	.post("/", (req, res) => {
		
	});
	
module.exports = router;