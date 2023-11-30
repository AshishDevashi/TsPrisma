import * as express from "express";
import { TweetControoler } from "../controller/Tweet";


const router  = express.Router()

router.get('/tweet',TweetControoler.getTweet)
router.post('/tweet', TweetControoler.createTweet)
router.put('/tweet/:id', TweetControoler.editTweet)
router.delete('/tweet/:id',TweetControoler.deleteTweet)


export default router;