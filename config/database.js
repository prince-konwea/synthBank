import mongoose from "mongoose";
import {} from "dotenv/config";

const connectDB = async () => {
    try{
       const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       })

       console.log(`Mongdb Connected ${conn.connection.host}`)
    }catch(err){
       console.error(`Error: ${err.message}`)
       process.exit(1)
    }
}

export default connectDB;