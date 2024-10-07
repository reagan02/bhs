import db from "../database/dbConnection.js";

export const create_bed = async (req, res) => {
	try {
		const { bed_number, room_number, status, daily_rate, monthly_rate } =
			req.body;

		await db.query(
			"INSERT INTO bed (bed_number, room_number, status, daily_rate, monthly_rate) VALUES(?,?,?,?,?)",
			[bed_number, room_number, status, daily_rate, monthly_rate]
		);
		res.status(201).json({ message: "Bed added successfully" });
	} catch (error) {
		console.error("Failed to create bed:", error);
		res.status(500).send("Internal Server Error");
	}
};
export const get_beds = async (req, res) => {
	try {
		const beds = await db.query("SELECT * FROM bed");
		res.status(200).json(beds);
	} catch (error) {
		console.error("Failed to get beds:", error);
		res.status(500).send("Internal Server Error");
	}
};
