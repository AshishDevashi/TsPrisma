import * as express from "express";
import { LoginController } from "../controller/Login";
import { use } from "../MIddleware/tryCatchMiddleware";
const router  = express.Router()

router.post('/login', use(LoginController.isLogin))
router.get('/login',use(LoginController.Login))
router.get('/signup',use(LoginController.signup))
router.get('/logout',use(LoginController.logout))

export default router;
