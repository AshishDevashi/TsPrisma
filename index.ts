import * as express from 'express';
import {configureApp} from './src/config/appConfig';
import configureMiddleware from './src/MIddleware/middleware';
import * as path from 'path'


const app = express();
require('dotenv').config();
configureApp(app)
configureMiddleware(app);
app.use(express.static(path.join(__dirname, 'public')))



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(` http://localhost:${PORT}/`);
});