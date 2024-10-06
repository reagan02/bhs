import express from "express";
import cors from "cors";
import path from "path";
import tenantRoute from "./routes/tenant.route.js";
import dotenv from "dotenv";
import connection from "./database/dbConnection.js";
const app = express();

dotenv.config();

app.use(express.json());
app.use("/api/tenants", tenantRoute);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
	console.log(req.method);
	res.send("Welcome to the Boarding House Management System API");
});

try {
	connection.query("SELECT 1");
	console.log("Database connected");
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
} catch (error) {
	console.log("Failed to connect to the database", error);
}
