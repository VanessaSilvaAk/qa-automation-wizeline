import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
  VALID_USER: {
    USERNAME: process.env.STANDARD_USERNAME,
    PASSWORD: process.env.PASSWORD
  },
  INVALID_USER: {
    USERNAME: 'invalid_user',
    PASSWORD: 'invalid_password'
  }
}