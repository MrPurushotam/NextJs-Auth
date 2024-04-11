import mongoose from "mongoose";

async function dbConnect(){
    try{
        const connection =await mongoose.connect(process.env.DB_STRING)
        console.log("Database Connected")
    }catch(e){
        console.log("Error occured ",e.message)
        process.exit(1)
    }
}

dbConnect

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
