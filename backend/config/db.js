import mongoose from 'mongoose';

const ConnectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Successfully Connected to MONGODB");
    } catch (error) {
        console.error("Unable to connnect to MONGODB");
        process.exit(1);
    }
}

export default ConnectDB;