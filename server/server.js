require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());


const user = require("./routes/userRoute");
app.use("/api/user", user);


const mongoose = require("mongoose");
const connection_string = process.env.ATLAS_URI;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	dbName: "mern-stack"
};

mongoose.connect(connection_string, options)
.then(() => console.log("Connected..."))
.catch((error) => console.log(error.message));

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Server running at port ${port}.`);
});