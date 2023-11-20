import * as express from "express";
import { CustomRequest } from "../utils/types";
const router  = express.Router()

router.get('/', async(req:CustomRequest, res) => {
    const user = req?.user;
    if(!user) return res.redirect('/login')
})

router.get('/login',async(req,res)=>{
    res.render('login')
})



export default router;