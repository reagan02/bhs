import { Sequelize } from "@sequelize/core";
import { MySqlDialect } from "@sequelize/mysql";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize({
	dialect: MySqlDialect,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT, 10),
});

try {
	await sequelize.authenticate();
	console.log("Sequelize and Mysql connected successfully");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

export default sequelize;
