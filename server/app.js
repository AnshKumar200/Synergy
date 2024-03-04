const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
	registrationNumber: String,
	batch: String,
	languages: String,
	domainWorked: String,
});

app.use(cors());

const User = mongoose.model("User", userSchema);

app.post("/api/submit-form", async (req, res) => {
	try {
		const newUser = new User(req.body);
		await newUser.save();

		res.status(200).json({ message: "Form submitted successfully" });
	} catch (error) {
		console.error("Error saving form data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.get("/api/get-staff-data", async (req, res) => {
	try {
		const staffData = await User.find({}, { _id: 0, __v: 0 });

		res.status(200).json(staffData);
	} catch (error) {
		console.error("Error fetching staff data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
