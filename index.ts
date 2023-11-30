if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}


import * as express from 'express';
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'
import * as path from 'path'
import * as session from 'express-session'

import helmet from 'helmet'
import UserRoute from './src/route/User'
import LoginRoute from './src/route/Login'
import HomeRoute from './src/route/Home'
import TweetRoute from './src/route/Tweet'
import bodyParser = require('body-parser');
import { CustomRequest } from './src/utils/types';

const app = express();

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

const sessionConfig = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(helmet())
app.use(express.static('public'));
app.use(cookieParser());
app.use(session(sessionConfig))



//route
app.use(UserRoute)
app.use(LoginRoute)
app.use(HomeRoute)
app.use(TweetRoute)


app.use((req:CustomRequest, res, next) => {
  console.log(req.session)
  res.locals.currentUser = req.user;
  next();
})

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Oh No, Something Went Wrong!'
  res.status(statusCode).render('error', { err })
})

const PORT = process.env.PORT || 3000
app.get('/api', (req, res) => {
    res.send("TypeScript With Express");
});

 
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});