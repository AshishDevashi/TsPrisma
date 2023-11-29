import * as bcryptjs from 'bcryptjs'

export const ConverthashPassword = async (password: string)=>{
    return await bcryptjs.hash(password,10)
}
export const CheckhashPassword = async (UserPassword: string,OriginalPassword: string)=>{
    return await bcryptjs.compare(UserPassword,OriginalPassword)
}