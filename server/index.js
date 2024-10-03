import express from "express";
import mysql from "mysql2";
import cors from "cors";
import path from "path";
import { connectToDatabase } from "./db/config.db.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	console.log(req.method);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
