import * as express from "express";
import { Prisma, PrismaClient  } from '@prisma/client'
import { handlePrismaError } from "../utils/handlePrismaError";


const prisma = new PrismaClient()
const router  = express.Router()


router.get('/tweet', async(req, res) => {
    const user = await prisma.tweet.findMany()
    res.json(user).status(200)
})
router.post('/tweet', async(req, res) => {
    const {title,descripation,userId} = req.body
    try {
        const tweet = await prisma.tweet.create({
            data:{
                title,descripation,userId
            }
        })
        // res.json(user).status(200)
        res.redirect('/')
    } catch (error) {
        handlePrismaError(error,res)
    }
})
router.put('/tweet/:id', async(req, res) => {
    const {id} = req.params
    const {title,descripation,userId} = req.body
    try {
        const user = await prisma.tweet.update({
            where:{
                id: id
            },
            data: {
                title,descripation,userId
            }
        })
        res.json(user).status(200)
    } catch (error) {
        handlePrismaError(error,res)
    }
})
router.delete('/tweet/:id', async(req, res) => {
    try {
        const {id} = req.params
        const user = await prisma.tweet.delete({
            where:{
                id: id
            }
        })
        res.json(user).status(200)
    } catch (error) {
        handlePrismaError(error,res)
    }
})


export default router;