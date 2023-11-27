import { Request } from 'express';

export interface CustomRequest extends Request {
  user?: String; 
}
export interface TokenType { 
      id?: string;    
}
