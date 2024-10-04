import { Tenant } from "../models/tenant.model.js";

export const getTenants = async (req, res) => {
	res.send("Get all tenants");
};

export const createTenant = async (req, res) => {
	await Tenant.sync();
	try {
		const jane = Tenant.build({ firstName: "Jane", lastName: "Doe" });
		await jane.save();
		console.log(jane.toJSON());
		res.send("Create tenant");
	} catch (error) {
		console.error(error);
	}
};
