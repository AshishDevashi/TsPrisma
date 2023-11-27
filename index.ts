import * as express from 'express';
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'
import helmet from 'helmet'

import UserRoute from './src/route/User'
import LoginRoute from './src/route/Login'
import HomeRoute from './src/route/Home'
import TweetRoute from './src/route/Tweet'
import bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(helmet())
app.use(express.static('public'));
app.use(cookieParser());


// //route
app.use(UserRoute)
app.use(LoginRoute)
app.use(HomeRoute)
app.use(TweetRoute)
app.use((err, req, res, next) => {
    console.error(err.stack);
  
    res.status(500).json({
      error: 'Internal Server Error',
      message: err.message,
    });
  });
 
const PORT = process.env.PORT || 3000
app.get('/api', (req, res) => {
    res.send("TypeScript With Express");
});

 
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});