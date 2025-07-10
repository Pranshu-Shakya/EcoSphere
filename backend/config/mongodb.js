import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on("connected", () => {
        console.log("MongoDB connection established successfully.");
    });
    
    await mongoose.connect(`${process.env.MONGODB_URI}/EcoSphere`)

}

export default connectDB;