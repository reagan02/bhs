import express from "express";
import cors from "cors";
import path from "path";
import tenantRoute from "./routes/tenant.route.js";
import db from "./config/connect_db.js";
import dotenv from "dotenv";
const app = express();

dotenv.config();
app.use(express.json());
app.use("/api/tenants", tenantRoute);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
	console.log(req.method);
	res.send("Welcome to the Boarding House Management System API");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
