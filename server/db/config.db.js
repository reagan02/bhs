import { createPool } from "mysql2/promise";

const pool = createPool({
	port: 3306,
	password: "root",
	database: "bhs_db",
	host: "localhost",
	user: "root",
});

const connectToDatabase = async () => {
	try {
		await pool.getConnection();
		console.log("Connected to database");
	} catch (error) {
		console.log("Error connecting to database: ", error);
		throw error;
	}
};

export { pool, connectToDatabase };
