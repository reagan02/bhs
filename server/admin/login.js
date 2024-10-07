import db from "../database/dbConnection.js";
import express from "express";

const router = express.Router();

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const admin = await db.query(
			"SELECT * FROM admin WHERE username = ? AND password = ?",
			[username, password]
		);
		if (admin.length === 0) {
			return res.status(401).send("Invalid username or password");
		}
		res.status(200).json("Login successful");
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
};
// Define the login route
router.post("/", login);
export default router;
