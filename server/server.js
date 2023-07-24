require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const connection_string = process.env.ATLAS_URI;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	dbName: "mern-stack"
};

/*
	mongoose.connect(connection_string, options)
	.then(() => console.log("Connected..."))
	.catch((error) => consoole.log(error.message));
*/

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Server running at port ${port}.`);
});