import mongoose from "mongoose";


console.log(process.env.DB_STRING)
mongoose.connect(process.env.DB_STRING).then(res=>{
    console.log("Db connected")
}).catch(err=>{
    console.log("Some errored occured while connecting db")
})
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true})

const User=mongoose.model("User",userSchema)
export default User;