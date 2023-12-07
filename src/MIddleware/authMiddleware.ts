import {Request,Response,NextFunction} from 'express'
import * as jwt from "jsonwebtoken";
import { CustomRequest, TokenType } from "../utils/types";

export const authorization = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.uid;

    if (!token) {
        return res.redirect('/auth/login');
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWTSECRET) as TokenType;
        req.user = decodedToken.id;
        next();
    } catch (error) {
        console.error(error);
        return res.redirect('/auth/login');
    }
};