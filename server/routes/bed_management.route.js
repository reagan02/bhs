import { Router } from "express";
import {
	create_bed,
	get_beds,
} from "../controller/bed_management.controller.js";

const router = Router();

router.route("/").post(create_bed).get(get_beds);
export default router;
