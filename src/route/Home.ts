import * as express from "express";
import { HoemController } from "../controller/Home";
import { use } from "../MIddleware/tryCatchMiddleware";
const router  = express.Router()

router.get('/', use(HoemController.IsUser))
router.get('/home', use(HoemController.Home))


export default router;