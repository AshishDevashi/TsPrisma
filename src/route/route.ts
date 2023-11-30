import { Router } from 'express';
import UserRoute from './User';
import LoginRoute from './Login';
import HomeRoute from './Home';
import TweetRoute from './Tweet';

const Allroutes = Router();

Allroutes.use(UserRoute);
Allroutes.use(LoginRoute);
Allroutes.use(HomeRoute);
Allroutes.use(TweetRoute);

export default Allroutes;