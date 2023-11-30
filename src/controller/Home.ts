import { Request, Response,NextFunction } from 'express';
import { TokenType } from "../utils/types";
import * as jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const Home = async(req:Request, res:Response,next:NextFunction) => {
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
}


export const HoemController = {
    Home
};