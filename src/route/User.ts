import * as express from "express";
import { UserControler } from "../controller/User";
import { use } from "../MIddleware/tryCatchMiddleware";

const router  = express.Router()
use

router.get('/user', use(UserControler.getUser))
router.post('/user', use(UserControler.createUser))
router.put('/user/:id',use(UserControler.editUser))
router.delete('/user/:id', use(UserControler.deleteUser))


export default router;

