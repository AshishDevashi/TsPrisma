import * as express from "express";
import { UserControler } from "../controller/User";

const router  = express.Router()

router.get('/user', UserControler.getUser)
router.post('/user', UserControler.createUser)
router.put('/user/:id',UserControler.editUser)
router.delete('/user/:id', UserControler.deleteUser)


export default router;

