import express from "express";
import cors from "cors";
import path from "path";
import tenant_route from "./routes/tenant.route.js";
import bed_route from "./routes/bed_management.route.js";
import dotenv from "dotenv";
import connection from "./database/dbConnection.js";
import login from "./admin/login.js";
const app = express();

dotenv.config();

app.use(express.json());

// routes
app.use("/api/tenants", tenant_route);
app.use("/api/bed", bed_route);
app.use("/login", login);

// PORT
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
