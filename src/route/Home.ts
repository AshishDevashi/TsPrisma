import * as express from "express";
import { HoemController } from "../controller/Home";
import { use } from "../MIddleware/tryCatchMiddleware";
const router  = express.Router()

router.get('/user', use(HoemController.Home))


export default router;