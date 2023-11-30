import { Request, Response } from 'express';
import {  PrismaClient  } from '@prisma/client'
import { handlePrismaError } from "../utils/handlePrismaError";


const prisma = new PrismaClient()

const getTweet = async(req:Request, res:Response) => {
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
}
const createTweet = async(req:Request, res:Response)  => {
    const user = await prisma.tweet.findMany()
    res.json(user).status(200)
}

const editTweet = async(req:Request, res:Response)  => {
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
}
const deleteTweet =  async(req:Request, res:Response)  => {
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
}


export const TweetControoler = {
    getTweet,
    createTweet,
    editTweet,
    deleteTweet
};