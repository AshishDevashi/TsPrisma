import * as express from "express";
import { TweetControoler } from "../controller/Tweet";
import { use } from "../MIddleware/tryCatchMiddleware";


const router  = express.Router()

router.get('/tweet',use(TweetControoler.getTweet))
router.post('/tweet', use(TweetControoler.createTweet))
router.put('/tweet/:id', use(TweetControoler.editTweet))
router.delete('/tweet/:id',use(TweetControoler.deleteTweet))


export default router;