import db from "../database/dbConnection.js";

export const createTenant = async (req, res) => {
	try {
		const {
			lastname,
			firstname,
			middlename,
			age,
			email,
			phone,
			gender,
			address,
		} = req.body;

		await db.query(
			"INSERT INTO tenant (lastname, firstname, middlename, age, email, phone, gender, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
			[lastname, firstname, middlename, age, email, phone, gender, address]
		);
		res.status(201).json({ message: "Tenant added successfully" });
	} catch (error) {
		console.error("Failed to create tenant:", error);
		res.status(500).send("Internal Server Error");
	}
};
export const getTenants = async (req, res) => {
	try {
		const tenants = await db.query("SELECT * FROM tenant");
		res.status(200).json(tenants);
	} catch (error) {
		console.error("Failed to get tenants:", error);
		res.status(500).send("Internal Server Error");
	}
};
