// appConfig.ts
import * as express from 'express';
import * as path from 'path';

const configureApp = (app: express.Application) => {
  // EJS Configuration
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
};

export default configureApp;