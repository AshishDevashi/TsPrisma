import { Prisma  } from '@prisma/client'

export function handlePrismaError(error, res) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        // Unique constraint violation for the 'email' field
        res.status(400).json({ error: 'Email is already in use.' });
      } else if(error.code === 'P2025' ) {
          res.status(500).json({ error: error.meta?.cause });
      }else{
        // Handle other known request errors
        res.status(500).json({ error: 'Internal server error known.' });
      }
    } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      // Handle unknown request errors
      res.status(500).json({ error: 'Internal server error unknown.' });
    } else {
      // Handle other types of errors
      console.error('Prisma Error:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  }