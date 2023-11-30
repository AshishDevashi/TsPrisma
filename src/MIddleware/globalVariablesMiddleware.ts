// globalVariables.ts
import { Request, Response,NextFunction } from 'express';
import { CustomRequest } from '../utils/types';

const globalVariablesMiddleware = (req: CustomRequest, res:Response, next:NextFunction) => {
  // console.log(req.session);
  res.locals.currentUser = req.user;
  next();
};

export default globalVariablesMiddleware;