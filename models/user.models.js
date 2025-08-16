import mongoose from "mongoose"

const user_Schema = new mongoose.Schema(
  {
   username:{
     type:String,
     required:true,
     unique:true
   },
   email:{
     type:String,
     lowercase:true,
     required:true
   },
   password:{
     type:String,
     required:[true,"Password is Required"]
   }
  },{timestamps : true}
)

export const User = mongoose.model("User" , user_Schema);