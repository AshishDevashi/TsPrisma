import * as express from 'express';
import {configureApp} from './src/config/appConfig';
import configureMiddleware from './src/MIddleware/middleware';
import * as path from 'path'
import { sendMail } from './src/utils/sendEmail';


const app = express();
require('dotenv').config();
configureApp(app)
configureMiddleware(app);
app.use(express.static(path.join(__dirname, 'public')))


const dataToSend = {
    email : 'kpp31072000@gmail.com',
    subject : 'test',
    text : 'test',
    otp: '12345'
}
sendMail(dataToSend)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(` http://localhost:${PORT}/`);
});