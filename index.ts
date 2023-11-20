import * as express from 'express';
import * as cors from 'cors'
import helmet from 'helmet'

import UserRoute from './src/route/User'
import LoginRoute from './src/route/Login'
import HomeRoute from './src/route/Home'
import bodyParser = require('body-parser');


const app = express();

app.set('view engine','ejs')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(helmet())
app.use(express.static('public'));


// //route
app.use(UserRoute)
app.use(LoginRoute)
app.use(HomeRoute)
 
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send("TypeScript With Express");
});
 
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});