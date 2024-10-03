import { Router } from "express";
import { createTenant, getTenants } from "../controllers/tenant.controller.js";

const router = Router();

router.route("/").post(createTenant).get(getTenants);
export default router;
