import { Request, Response } from 'express';
import {  PrismaClient  } from '@prisma/client'
import { handlePrismaError } from "../utils/handlePrismaError";
import { ConverthashPassword } from "../utils/hashPassword";


const prisma = new PrismaClient()


const createUser =  async(req:Request, res:Response) => {
    const {name,email,password} = req.body
    let newPassword =  await ConverthashPassword(password)
        const user = await prisma.user.create({
            data:{
                name,email,password:newPassword
            }
        })
        res.redirect('/auth/login')
}
const getUser = async(req, res) => {
    const user = await prisma.user.findMany()
    res.json(user).status(200)
}
const editUser = async(req:Request, res:Response) => {
    const {id} = req.params
    const {name,email,password}= req.body

        const user = await prisma.user.update({
            where:{
                id: id
            },
            data: {
                name,email,password
            }
        })
        res.json(user).status(200)
}
const deleteUser =  async(req:Request, res:Response) => {
        const {id} = req.params
        const user = await prisma.user.delete({
            where:{
                id: id
            }
        })
        res.json(user).status(200)
}



export const UserControler ={
    getUser,
    createUser,
    editUser,
    deleteUser,
};
