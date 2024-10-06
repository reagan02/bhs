import db from "../database/dbConnection.js";

export const getTenants = async (req, res) => {
	try {
		const tenants = await db.query("SELECT * FROM Tenants");
		res.status(200).json(tenants);
	} catch (error) {
		console.error("Failed to get tenants:", error);
		res.status(500).send("Internal Server Error");
	}
};

export const createTenant = async (req, res) => {};
