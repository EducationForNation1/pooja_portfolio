import mongoose from "mongoose";

const connectDB = async(DATABASEURL)=>{
    try {
        const dbOption={
            dbName:'portfolio'
        }
       const response = await mongoose.connect(DATABASEURL,dbOption);
       if(response){
        console.log("Database connected Successfully!")
       }else{
        console.log("Database not Connected!")
       }
    } catch (error) {
        console.log(error.message)
    }
}


export default connectDB;