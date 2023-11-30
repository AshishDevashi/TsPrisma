import { Request } from 'express';

export type CustomRequest = Request & {
  user?: String,
  session?: string  
}
export type TokenType = {
  id?: string;   
}
