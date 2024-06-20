import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import dotenv from "dotenv"
dotenv.config()

const connectDb = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) 
       console.log(`\n mongodb connetted !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("mongoDb connection err",error);
        process.exist(1)
    }
}

export default connectDb
