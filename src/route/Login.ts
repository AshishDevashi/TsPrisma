import * as express from "express";
import { LoginController } from "../controller/Login";
const router  = express.Router()

router.post('/login', LoginController.isLogin)
router.get('/login',LoginController.Login)

export default router;
