import { Request, Response } from 'express';
import {  PrismaClient  } from '@prisma/client'


const prisma = new PrismaClient()

const getTweet = async(req:Request, res:Response)  => {
    const user = await prisma.tweet.findMany()
    res.json(user).status(200)
}

const createTweet  = async(req:Request, res:Response) => {
    const {title,descripation,userId} = req.body
        const tweet = await prisma.tweet.create({
            data:{
                title,descripation,userId
            }
        })
        // res.json(user).status(200)
        res.redirect('/home')
}

const editTweet = async(req:Request, res:Response)  => {
    const {id} = req.params
    const {title,descripation,userId} = req.body

        const user = await prisma.tweet.update({
            where:{
                id: id
            },
            data: {
                title,descripation,userId
            }
        })
        res.json(user).status(200)

}
const deleteTweet =  async(req:Request, res:Response)  => {
        const {id} = req.params
        const user = await prisma.tweet.delete({
            where:{
                id: id
            }
        })
        res.json(user).status(200)

}


export const TweetControoler = {
    getTweet,
    createTweet,
    editTweet,
    deleteTweet
};