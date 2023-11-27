import * as express from "express";
import { TokenType } from "../utils/types";
import * as jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const router  = express.Router()
const prisma = new PrismaClient()

router.get('/', async(req, res,next) => {
    try {
        const token = req.cookies.uid
        if(!token) return res.redirect('/login')
        const decodedToken = jwt.verify(token,process.env.JWTSECRET ) as TokenType;
        const user = await prisma.user.findUnique({
            where: {
                id: decodedToken.id
            },
            include: {
                Tweet: true, 
              },
        })  
        res.render('home',{user:user})
    } catch (error) {
        next(error)
    }
})

router.get('/login',async(req,res)=>{
    res.render('login')
})



export default router;