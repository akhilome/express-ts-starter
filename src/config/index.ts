import dotenv from 'dotenv';
dotenv.config(); // load config vars from .env to process.env

export const env = {
  port: process.env.PORT || 8080,
};
