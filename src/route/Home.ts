import * as express from "express";
import { HoemController } from "../controller/Home";
const router  = express.Router()

router.get('/', HoemController.Home)


export default router;