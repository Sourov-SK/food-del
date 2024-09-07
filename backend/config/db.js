import mongoose, { connect } from "mongoose";

 export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://sourovkumar:58666276@cluster0.nprds.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}