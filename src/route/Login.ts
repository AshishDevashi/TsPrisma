import * as express from "express";
import { PrismaClient  } from '@prisma/client'
import * as jwt from 'jsonwebtoken'
import { CheckhashPassword } from "../utils/hashPassword";
const prisma = new PrismaClient()
const router  = express.Router()

router.post('/login', async(req, res) => {
    const {email,password} = req.body
    if(!email){
        return res.json({error: "Please Enter Email"}).status(404)
    }
    if(!password){
        return res.json({error: "Please Enter Password"}).status(404)
    }
    const user = await prisma.user.findUnique({
        where:{
            email: email,
        }
    })
    if(!user){
        return res.json({error: "User Not Found with this Email"}).status(404)
    }
    let PasswordMatch = await CheckhashPassword(password,user.password)
    if(!PasswordMatch){
        return res.json({error: "Password is Wrong"}).status(400)
    }
    let token = jwt.sign(
        {id: user.id},
        process.env.JWTSECRET,
        {expiresIn: "24h" }
        )
    res.cookie('uid',token).render('home',{user:user})
    // res.redirect('/')
})



export default router;
