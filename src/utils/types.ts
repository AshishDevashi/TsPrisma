import { Request } from 'express';

export type CustomRequest = Request & {
  user?: String,
  session?: string  
}
export type TokenType = {
  id?: string;   
}
export type EMAILType = {
  email?: string,
  subject?: string,
  text?: string,
  [name: string]: any;
}