import mongoose from "mongoose"

const subtodo_schema = new moongose.module({
  content:{
    type:String,
    required:true,
 },
 complete:{
    type:Boolean,
    default:false
 },
 created:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 }
} , {timestamps : true});

export const subTodo = mongoose.model("subTodo" , subtodo_schema);