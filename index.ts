import * as express from 'express';
import configureApp from './src/config/appConfig';
import configureMiddleware from './src/MIddleware/middleware';


const app = express();
require('dotenv').config();
configureApp(app)
configureMiddleware(app);



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});