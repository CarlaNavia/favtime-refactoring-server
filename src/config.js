import dotenv from "dotenv";
dotenv.config({path:`.env.${process.env.NODE_ENV}`});
export const PORT = process.env.PORT;
export const SECRET_TOKEN = process.env.SECRET_TOKEN;
export const TOKEN_EXPIRES_IN = process.env.TOKEN_EXPIRES_IN