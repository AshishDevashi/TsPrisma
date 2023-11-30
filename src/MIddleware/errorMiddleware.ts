import * as express from 'express';

const errorMiddleware = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Oh No, Something Went Wrong!';
  console.log(err)
  res.status(statusCode).render('error', { err:err });
};

export default errorMiddleware;