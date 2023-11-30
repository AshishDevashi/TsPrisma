// globalVariables.ts
import { CustomRequest } from '../utils/types';

const globalVariablesMiddleware = (req: CustomRequest, res, next) => {
  console.log(req.session);
  res.locals.currentUser = req.user;
  next();
};

export default globalVariablesMiddleware;