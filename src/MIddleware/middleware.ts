// middleware.ts
import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import * as bodyParser from 'body-parser';
import Allroutes from '../route/route';
import globalVariablesMiddleware from './globalVariablesMiddleware';
import errorMiddleware from './errorMiddleware';

const configureMiddleware = (app: express.Application) => {
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors());
  app.use(helmet());
  
  app.use(express.static('public'));
  app.use(cookieParser());
  
  app.use(globalVariablesMiddleware)
  
  app.use(Allroutes);
  app.use(errorMiddleware)

};

export default configureMiddleware;