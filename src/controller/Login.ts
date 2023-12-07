import { Request, Response } from 'express';
import { PrismaClient  } from '@prisma/client'
import * as jwt from 'jsonwebtoken'
import { CheckhashPassword } from "../utils/hashPassword";
const prisma = new PrismaClient()

const isLogin = async(req:Request, res:Response)  => {
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
    res.cookie('uid',token).redirect('/home/user')
}

const Login = async(req:Request, res:Response) =>{
    res.render('login')
}
const signup = async(req:Request, res:Response) =>{
    res.render('signup')
}
const logout = async(req:Request, res:Response)=>{
    const token = req.cookies.uid;
    if (!token) {
        return res.status(400).send('Token not found in cookies');
      }
    res.cookie('uid', '', { expires: new Date(0) });
    res.redirect('/auth/login');
}



export const LoginController = {
    isLogin,
    Login,
    signup,
    logout
}