import { Router } from 'express';
import UserRoute from './User';
import LoginRoute from './Login';
import HomeRoute from './Home';
import TweetRoute from './Tweet';
import { authorization } from '../MIddleware/authMiddleware';

const Allroutes = Router();

Allroutes.use('/home',authorization,HomeRoute);
Allroutes.use('/u',UserRoute);
Allroutes.use('/auth',LoginRoute);
Allroutes.use('/user',TweetRoute);

export default Allroutes;