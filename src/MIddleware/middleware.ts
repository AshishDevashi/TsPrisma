// middleware.ts
import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan'
import helmet from 'helmet';
import Allroutes from '../Route/route';
import globalVariablesMiddleware from './globalVariablesMiddleware';
import errorMiddleware from './errorMiddleware';



const configureMiddleware = (app: express.Application) => {
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors());
  app.use(helmet());
  // app.use(morgan('combined')); for production build
  
  app.use(cookieParser());
  
  app.use(globalVariablesMiddleware)
  
  app.use(Allroutes);
  app.use(errorMiddleware)

};

export default configureMiddleware;