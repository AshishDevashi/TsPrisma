import * as express from "express";
import { Prisma, PrismaClient  } from '@prisma/client'
import { handlePrismaError } from "../utils/handlePrismaError";
import { ConverthashPassword } from "../utils/hashPassword";


const prisma = new PrismaClient()
const router  = express.Router()

router.get('/user', async(req, res) => {
    const user = await prisma.user.findMany()
    res.json(user).status(200)
})
router.post('/user', async(req, res) => {
    const {name,email,password} = req.body
    let newPassword =  await ConverthashPassword(password)
    try {
        const user = await prisma.user.create({
            data:{
                name,email,password:newPassword
            }
        })
        res.json(user).status(200)
    } catch (error) {
        handlePrismaError(error,res)
    }
})
router.put('/user/:id', async(req, res) => {
    const {id} = req.params
    const {name,email,password}= req.body
    try {
        const user = await prisma.user.update({
            where:{
                id: id
            },
            data: {
                name,email,password
            }
        })
        res.json(user).status(200)
    } catch (error) {
        handlePrismaError(error,res)
    }
})
router.delete('/user/:id', async(req, res) => {
    try {
        const {id} = req.params
        const user = await prisma.user.delete({
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

