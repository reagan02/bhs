import { Sequelize, DataTypes } from "@sequelize/core";
import sequelize from "../config/connect_db.js";

export const Tenant = sequelize.define(
	"Tenant",
	{
		// Model attributes are defined here
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: true,
	}
);
