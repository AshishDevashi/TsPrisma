import { Request, Response,NextFunction } from 'express';
import { TokenType } from "../utils/types";
import * as jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const Home = async(req:Request, res:Response,next:NextFunction) => {
    const token = req.cookies.uid
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
}  

export const HoemController = {
    Home
};